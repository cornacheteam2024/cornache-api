const { Storage } = require("@google-cloud/storage");
const path = require("path");
const key = path.resolve(__dirname, "./servis-key.json");

const storage = new Storage({
  projectId: "cornache-caps",
  keyFilename: key,
});

const bucketName = "cornache-bucket";
const bucket = storage.bucket(bucketName);

function imgUrlBucket(filename) {
  return `https://storage.googleapis.com/${bucketName}/${filename}`;
}

const bucketUpload = {};

bucketUpload.uploadToBucket = (req, res, next) => {
  if (!req.file) return next();

  const gcsname = `user-profile/${Date.now()}~${req.file.originalname}`;
  const file = bucket.file(gcsname);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  stream.on("error", (err) => {
    req.file.cloudStorageError = err;
    next(err);
  });

  stream.on("finish", () => {
    req.file.cloudStorageObject = gcsname;
    req.file.cloudStoragePublicUrl = imgUrlBucket(gcsname);
    file.makePublic().then(() => {
      req.file.cloudStoragePublicUrl = imgUrlBucket(gcsname);
      next();
    });
  });

  stream.end(req.file.buffer);
};

module.exports = bucketUpload;
