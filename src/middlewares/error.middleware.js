const errorMiddleware = (error, req, res, next) => {
  res.status(error.statusCode || 500);

  const response = {
    message: error.message,
    ...error.additionalInformation,
  };

  res.json(response);

  next();
};

export default errorMiddleware;
