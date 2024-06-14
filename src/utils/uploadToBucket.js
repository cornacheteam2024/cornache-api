const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
    projectId: 'cornache-caps',
    // keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});

const bucketName = "cornache-bucket";
const bucket = storage.bucket(bucketName);

function imgUrlBucket(filename) {
    return `https://storage.googleapis.com/${bucketName}/${filename}`;
}

const bucketUpload = {};

bucketUpload.uploadToBucket = (req, res, next) => {

    if (!req.file) return next();

    const timeStamp = new Date().getTime()
    const imgName = `${timeStamp}-${req.file.originalname}`;

    let path;
    if (req.file.fieldname == 'avatar_image') {
        path = 'user-profile/'
        
    } else if (req.file.fieldname == 'predicted_image') {
        path = 'predicted-image/'

    } else if (req.file.fieldname == 'room_image') {
        path = 'room-image/'

    }

    const gcsname = path + imgName;
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
