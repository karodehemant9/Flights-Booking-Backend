const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateFlight(req, res, next) {
  const {
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    arrivalTime,
    departureTime,
    price,
    boardingGate,
    totalSeats,
  } = req.body;
  if (!flightNumber || typeof flightNumber !== "string") {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["flightNumber is required and should be a string"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!airplaneId || typeof airplaneId !== "string") {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["airplaneId is required and should be a string"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!departureAirportId || typeof departureAirportId !== "string") {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["departureAirportId is required and should be a string"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!arrivalAirportId || typeof arrivalAirportId !== "string") {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["arrivalAirportId is required and should be a string"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!arrivalTime) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["arrivalTime is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!departureTime) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["departureTime is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!price || typeof price !== "integer") {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["price is required and should be an integer"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!boardingGate) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["boardingGate is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!totalSeats) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["totalSeats is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

function validateUpdateSeatsRequest(req, res, next) {
  const { seatsToBeBooked } = req.body;
  if (!seatsToBeBooked) {
    ErrorResponse.message = "Something went wrong while updating seats";
    ErrorResponse.error = new AppError(
      ["seatsToBeBooked is required"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateFlight,
  validateUpdateSeatsRequest,
};
