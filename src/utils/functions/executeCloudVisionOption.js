import CloudVisionAPIHelper from '../objects/CloudVisionAPIHelper.js';

/**
 * @description This function allows to analyze images using Cloud Vision by providing the desired
 *  option and an image
 * @param {String} option a valid feature provided by Cloud Vision API for analyze images
 * @param {Object} image an image to be analyzed by the Cloud Vision (maximum file size of 10MB)
 * @returns Result from Google Cloud Vision API considering the feature provided
 */

const executeCloudVisionOption = (option, image) => CloudVisionAPIHelper[option](image);

export default executeCloudVisionOption;
