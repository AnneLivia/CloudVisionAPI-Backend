import { Router } from 'express';
import CloudVisionController from '../controllers/CloudVisionController.js';

import optionValidator from '../middlewares/option.middleware.js';
import uploadMiddleware from '../middlewares/upload.middleware.js';

const router = Router();

router.post('/useCloudVisionAPI', optionValidator, uploadMiddleware, CloudVisionController.useCloudVisionAPI);

export default router;
