const express = require("express");
const asyncHandler = require("express-async-handler");
const rsvpRepository = require("../../db/rsvp-repository");
const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (_req, res) => {
    
     const rsvps = await rsvpRepository.listRSVPs(_req.params.id);
     return res.json(rsvps);
  })
);

module.exports = router;