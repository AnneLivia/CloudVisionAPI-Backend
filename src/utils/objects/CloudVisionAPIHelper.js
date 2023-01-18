import Vision from '@google-cloud/vision';
import path from 'path';
import CLOUDVISION_OPTIONS from '../../constants/cloudvisionOptions.js';

// deve-se passar o caminho para a credencial
const client = new Vision.ImageAnnotatorClient({
  keyFilename: path.resolve('src', 'config', 'keys.json'),
});

const CloudVisionAPIHelper = {
  [CLOUDVISION_OPTIONS.FACE_DETECTION]: async (image) => {
    try {
      const result = await client.faceDetection(image);

      if (result[0].error) {
        throw new Error(result[0].error.message);
      }

      return result[0].faceAnnotations;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  [CLOUDVISION_OPTIONS.LABEL_DETECTION]: async (image) => {
    try {
      const result = await client.labelDetection(image);

      if (result[0].error) {
        throw new Error(result[0].error.message);
      }

      return result[0].labelAnnotations;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  [CLOUDVISION_OPTIONS.LANDMARK_DETECTION]: async (image) => {
    try {
      const result = await client.landmarkDetection(image);

      if (result[0].error) {
        throw new Error(result[0].error.message);
      }

      return result[0].landmarkAnnotations;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  [CLOUDVISION_OPTIONS.OBJECT_LOCALIZATION]: async (image) => {
    try {
      const result = await client.objectLocalization(image);

      if (result[0].error) {
        throw new Error(result[0].error.message);
      }

      return result[0].localizedObjectAnnotations;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  [CLOUDVISION_OPTIONS.SAFE_SEARCH_DETECTION]: async (image) => {
    try {
      const result = await client.safeSearchDetection(image);

      if (result[0].error) {
        throw new Error(result[0].error.message);
      }

      return result[0].safeSearchAnnotation;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  [CLOUDVISION_OPTIONS.WEB_DETECTION]: async (image) => {
    try {
      const result = await client.webDetection(image);

      if (result[0].error) {
        throw new Error(result[0].error.message);
      }

      return result[0].webDetection;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  [CLOUDVISION_OPTIONS.DOCUMENT_TEXT_DETECTION]: async (image) => {
    try {
      const result = await client.documentTextDetection(image);

      if (result[0].error) {
        throw new Error(result[0].error.message);
      }

      return result[0].fullTextAnnotation;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  [CLOUDVISION_OPTIONS.TEXT_DETECTION]: async (image) => {
    try {
      const result = await client.textDetection(image);

      if (result[0].error) {
        throw new Error(result[0].error.message);
      }

      return result[0].fullTextAnnotation;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default CloudVisionAPIHelper;
