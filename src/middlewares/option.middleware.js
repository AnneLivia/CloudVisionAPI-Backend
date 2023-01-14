import CLOUDVISION_OPTIONS from '../constants/cloudvisionOptions.js';
import ErrorFactory from '../utils/objects/ErrorFactory.js';

const optionValidator = (req, res, next) => {
  if (!req.query.option) {
    return next(ErrorFactory.create(
      'BadRequest',
      'You must provide an option on the URL. '
            + 'Example: .../api/useCloudVisionAPI/?option=TEXT_DETECTION',
      {
        supported_options: Object.keys(CLOUDVISION_OPTIONS),
      },
    ));
  }
  if (!(req.query.option in CLOUDVISION_OPTIONS)) {
    return next(ErrorFactory.create(
      'BadRequest',
      'The provided option is not supported by this application',
      {
        supported_options: Object.keys(CLOUDVISION_OPTIONS),
      },
    ));
  }
  next();
};

export default optionValidator;
