const express = require("express");
const asyncHandler = require("express-async-handler");
const rsvpRepository = require("../../db/rsvp-repository");
const router = express.Router();

router.get(
  "/:eventId",
  asyncHandler(async (req, res) => {
    const { eventId } = req.params;
    const rsvps = await rsvpRepository.listRSVPs(eventId);
    return res.json(rsvps);
  })
);

module.exports = router;
