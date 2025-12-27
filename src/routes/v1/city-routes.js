const express = require("express");
const router = express.Router();
const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");

// POST /api/v1/cities
router.post(
  "/",
  CityMiddlewares.validateCreateCity,
  CityController.createCity
);

// GET /api/v1/cities
router.get("/", CityController.getCities);

// GET /api/v1/cities/:id
router.get("/:id", CityController.getCity);

// DELETE /api/v1/cities/:id
router.get("/:id", CityController.destroyCity);

// PATCH /api/v1/cities/:id
router.patch("/:id", CityController.updateCity);

module.exports = router;
