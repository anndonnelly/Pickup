const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const TypesRepository = require("../../db/types-repository");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const locations = await TypesRepository.listTypes();
    return res.json(locations);
  })
);

module.exports = router;
