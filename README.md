# CloudVisionAPI-Backend

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AnneLivia/CloudVisionAPI-Backend/blob/main/LICENCE)
![Google Cloud Vision](https://img.shields.io/badge/Google-4285F4?style=flat&logo=Google&logoColor=white)
![Node JS](https://img.shields.io/badge/Jest-C21325?style=flat&logo=Jest&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white)

An API developed to allow requests to Cloud Vision API features 

## Setup
In order to run this project you must create a folder called config inside src folder. Inside config you must place your service account's credentials downloaded from GCP. This credential is required to use Cloud Vision API.

## API endpoints:

### Documentation

By going to http://localhost:4000/api-docs, you can check the documentation of the API
<p align='center'>
  <img src="https://user-images.githubusercontent.com/31932673/221373798-3c1ddfe0-5089-4101-8f3c-abc530d79a97.PNG" width="75%" />
</p>

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
