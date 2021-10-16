const express = require("express");
const asyncHandler = require("express-async-handler");
const rsvpRepository = require("../../db/rsvp-repository");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    
     const rsvps = await rsvpRepository.listRSVPs();
     return res.json(rsvps);
  })
);

module.exports = router;