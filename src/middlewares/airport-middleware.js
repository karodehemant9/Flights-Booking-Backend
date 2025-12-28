const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateAirport(req, res, next) {
  const { name, code, cityId } = req.body;
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
  if (!cityId || typeof cityId !== "integer") {
    ErrorResponse.message = "Invalid or missing 'cityId'";
    ErrorResponse.error = new AppError(
      ["cityId is required and should be an integer"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateAirport,
};
