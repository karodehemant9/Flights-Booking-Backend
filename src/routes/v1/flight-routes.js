const express = require("express");
const router = express.Router();
const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");

// POST /api/v1/flights
router.post(
  "/",
  FlightMiddlewares.validateCreateFlight,
  FlightController.createFlight
);

// GET /api/v1/flights?trips=MUM-DEL
router.get("/", FlightController.getAllFlights);

// GET /api/v1/flights/:id
router.get("/:id", FlightController.getFlight);

// PATCH /api/v1/flights/:id/seats
router.patch(
  "/:id/seats",
  FlightMiddlewares.validateUpdateSeatsRequest,
  FlightController.updateSeats
);

module.exports = router;
