import multer from 'multer';
import ErrorFactory from '../utils/objects/ErrorFactory.js';

const upload = multer({
  // memoryStorage store files in memory, so we can process the images without
  // the need to save it. Be careful, because too large files induces to run out of memory
  // we can also use Multer S3 to save in Amazon s3 or multer-cloud-storage,
  // to save in cloud storage or we can use diskStorage, and specify a path
  // in order to save the files
  storage: multer.memoryStorage(),
  limits: {
    // 1024 bytes, 1024 x 1024 = 1MB,
    // Image files sent to the Vision API should not exceed 20MB
    // Vision API imposes a 10MB JSON request size limit
    fileSize: 1024 * 1024 * 10, // 10MB
  },
  // filter files that should be uploaded and which should be skipped
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype === 'image/png'
      || file.mimetype === 'image/jpeg'
      || file.mimetype === 'image/jpg'
    ) {
      return callback(null, true);
    }

    callback(
      new Error(
        "Invalid file. It's only accepted images "
          + 'with the following extensions: png, jpeg and jpg',
      ),
      false,
    );
  },
});

const uploadSingleImage = upload.single('image');

const uploadMiddleware = (req, res, next) => {
  uploadSingleImage(req, res, (error) => {
    if (error) {
      return next(ErrorFactory.create('BadRequest', error.message));
    }

    next();
  });
};

export default uploadMiddleware;
