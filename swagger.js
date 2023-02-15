import CLOUDVISION_OPTIONS from './src/constants/cloudvisionOptions.js';

const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'API to execute Cloud Vision (GCP) Features',
    description: 'An API created to execute most of the features provided by Cloud Vision API',
    contact: {
      name: 'Suporte',
      email: 'annelivia16@gmail.com',
    },
    version: '1.0.0',
  },
  paths: {
    '/api/useCloudVisionAPI': {
      post: {
        description: 'This endpoint receives a valid Vision API feature option and an image using multipart/form '
        + 'and returns the processed result from Google Cloud Vision API',
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                type: 'object',
                properties: {
                  image: {
                    type: 'string',
                    format: 'base64',
                  },
                },
              },
              encoding: {
                image: {
                  contentType: 'image/png, image/jpeg, image/jpg',
                },
              },
            },
          },
        },
        parameters: [{
          in: 'query',
          name: 'option',
          required: true,
          schema: {
            type: 'string',
            enum: [
              ...Object.keys(CLOUDVISION_OPTIONS),
            ],
          },
          summary: 'Execute Cloud Vision API on images',
          description: 'Valid Cloud Vision Options to execute:\n '
            + '* `DOCUMENT_TEXT_DETECTION` -  extracts text from an image, but the response is optimized for dense '
              + 'text and documents\n '
            + '* `FACE_DETECTION` - detects multiple faces within an image along with the associated key facial '
              + 'attributes such as emotional state or wearing headwear\n'
            + '* `WEB_DETECTION` - detects Web references to an image\n'
            + '* `LABEL_DETECTION` - detect and extract information about entities in an image, across a broad '
              + 'group of categories.\n'
            + '* `LANDMARK_DETECTION` - detects popular natural and human-made structures within an image\n'
            + '* `OBJECT_LOCALIZATION` - detect and extract multiple objects in an image\n'
            + '* `SAFE_SEARCH_DETECTION` - detects explicit content such as adult content or violent content within an image\n'
            + '* `TEXT_DETECTION` - detects and extracts text from any image\n',
        },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
              properties: {
                result: {
                  type: 'object',
                },
              },
            },
          },
          400: {
            description: 'Bad Request',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
                supported_options: {
                  type: 'object',
                },
              },
            },
          },
        },
      },
    },
  },
};
export default swaggerDocument;
