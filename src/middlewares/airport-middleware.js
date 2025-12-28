const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateAirport(req, res, next) {
  const { name, code, address } = req.body;
  if (!name || typeof name !== "string") {
    ErrorResponse.message = "Invalid or missing 'name'";
    ErrorResponse.error = new AppError(
      ["Name is required and should be a string"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!code || typeof code !== "string") {
    ErrorResponse.message = "Invalid or missing 'code'";
    ErrorResponse.error = new AppError(
      ["Code is required and should be a string"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateAirport,
};
