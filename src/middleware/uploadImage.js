const Multer = require('multer');

const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: 5 * 1024 * 1024
})

module.exports = multer;