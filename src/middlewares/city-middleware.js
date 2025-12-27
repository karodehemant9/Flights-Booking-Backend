const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateCity(req, res, next) {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    ErrorResponse.message = "Invalid or missing 'name'";
    ErrorResponse.error = new AppError(
      ["Name is required and should be a string"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateCity,
};
