const express = require("express");
const router = express.Router();
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

// POST /api/v1/airplanes
router.post(
  "/",
  AirplaneMiddlewares.validateCreateAirplane,
  AirplaneController.createAirplane
);

// GET /api/v1/airplanes
router.get("/", AirplaneController.getAirplanes);

// GET /api/v1/airplanes/:id
router.get("/:id", AirplaneController.getAirplane);

// DELETE /api/v1/airplanes/:id
router.get("/:id", AirplaneController.destroyAirplane);

// PATCH /api/v1/airplanes/:id
router.patch("/:id", AirplaneController.updateAirplane);

module.exports = router;
