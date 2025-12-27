const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateAirplane(req, res, next) {
  const { modelNumber, capacity } = req.body;
  if (!modelNumber || typeof modelNumber !== "string") {
    ErrorResponse.message = "Invalid or missing 'modelNumber'";
    ErrorResponse.error = new AppError(
      ["Model Number is required and should be a string"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (capacity === undefined || typeof capacity !== "number" || capacity < 0) {
    ErrorResponse.message = "Invalid or missing 'capacity'";
    ErrorResponse.error = new AppError(
      ["capacity is required and should be a non-negative number"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateAirplane,
};
