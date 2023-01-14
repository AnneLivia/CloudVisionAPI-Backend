import ErrorFactory from '../utils/objects/ErrorFactory.js';
import executeCloudVisionOption from '../utils/functions/executeCloudVisionOption.js';

const Controller = {
  async useCloudVisionAPI(req, res, next) {
    try {
      if (!req.file) { return next(ErrorFactory.create('BadRequest', 'You must upload an image (maximum image size is 10MB)')); }

      const image = req.file;
      const result = await executeCloudVisionOption(req.query.option, image.buffer);

      res.json({ result });
    } catch (error) {
      console.error(error);
      next(ErrorFactory.create('BadRequest', 'Unexpected Error', { error: error.message }));
    }
  },
};

export default Controller;
