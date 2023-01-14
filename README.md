# CloudVisionAPI-Backend

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/olavoparno/jest-badges-readme/blob/master/LICENSE)
![Google Cloud Vision](https://img.shields.io/badge/Google-4285F4?style=flat&logo=Google&logoColor=white)
![Node JS](https://img.shields.io/badge/Jest-C21325?style=flat&logo=Jest&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white)

An API developed to allow requests to Cloud Vision API features 

## API endpoints:

<table align="center">
<thead>
  <tr>
    <th><b>HTTP request</b></th>
    <th><b>Description</b></th>
    <th><b>Request Query</b></th>
    <th><b>Request File</b></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><b>POST</b> /api/useCloudVisionAPI</td>
    <td>Execute a specific Cloud Vision Feature</td>
    <td>option=CLOUD_VISION_OPTION</td>
    <td>Multipart FormData, with an image field containing a PNG, JPEG or JPG image (Maximum size of 10 MB)</td>
  </tr>
</tbody>
</table>

## API Available Options 

This API allows to execute the following features that must be provided in the following way: (.../api/useCloudVisionAPI/?option=THEOPTIONHERE)
  - DOCUMENT_TEXT_DETECTION
  - FACE_DETECTION
  - LABEL_DETECTION
  - LANDMARK_DETECTION
  - OBJECT_LOCALIZATION
  - SAFE_SEARCH_DETECTION
  - TEXT_DETECTION
  - WEB_DETECTION
  
<br/>
<p align="center">© Developed by Anne Livia</p>
