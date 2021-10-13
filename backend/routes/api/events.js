const express = require("express");
const asyncHandler = require("express-async-handler");
const EventRepository = require("../../db/events-repository");
const router = express.Router();
const { check } = require("express-validator");
const {handleValidationErrors} = require("../../utils/validation")

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const events = await EventRepository.listEvents();
    return res.json(events);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const event = await EventRepository.listEvent(req.params.id);
    return res.json(event);
  })
);

const validateEvent = [
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide an event name with at least 4 characters."),
  check("date")
    .exists({ checkFalsy: true })
    .isAfter(new Date().toString())
    .withMessage("Please provide a date that is in the futute for your event"),
  check("eventAttendees")
    .exists({ checkFalsy: true })
    .isInt()
    .withMessage("Please provide a start and end time for your event"),
  handleValidationErrors,
];

router.post(
  "/", validateEvent,
  asyncHandler(async function (req, res) {
    const id = await EventRepository.createEvent(req.body);
    return res.json(id);
  })
);


router.put(
  "/:id",
  validateEvent,
  asyncHandler(async function (req, res) {
    const event = await EventRepository.updateEvent(req.body);
    return res.json(event);
  })
);

router.delete(
  "/:id",
  asyncHandler(async function (req, res) {
    const eventId = await EventRepository.deleteEvent(req.params.id);
    return res.json({ eventId });
  })
);


module.exports = router;

//TODO set up on frontend that user needs to put in date in YYYY/MM/DD format



