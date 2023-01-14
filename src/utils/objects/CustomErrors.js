class GeneralError extends Error {
  constructor(message, additionalInformation, statusCode = 500) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.additionalInformation = additionalInformation;
  }
}

class BadRequest extends GeneralError {
  constructor(message, additionalInformation) {
    super(message, additionalInformation, 400);
  }
}

class NotFound extends GeneralError {
  constructor(message, additionalInformation) {
    super(message, additionalInformation, 404);
  }
}

export {
  NotFound,
  BadRequest,
};
