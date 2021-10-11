const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const LocationsRepository = require("../../db/locations-repository");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const locations = await LocationsRepository.listLocations();
    return res.json(locations);
  })
);

module.exports = router;