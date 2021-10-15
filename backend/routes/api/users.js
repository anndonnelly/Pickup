// This file will hold the resources for the route paths beginning with /api/users
const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");
const router = express.Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const UserRepository = require("../../db/users-repository");

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

router.get(
  "/:id/hosting",
  asyncHandler(async (_req, res) => {
    let {id} = _req.params
    const events = await UserRepository.listMyHostingEvents(id);
    return res.json(events);
  }));

router.get(
  "/:id/attending",
  asyncHandler(async (_req, res) => {
    let { id } = _req.params;
    const events = await UserRepository.listMyAttendingEvents(id);
    return res.json(events);
  })
);

router.post(
  "/:id/attending",
  asyncHandler(async function (req, res) {
    const RSVP = await UserRepository.createRSVP(req.body)
    return res.json(RSVP);
  })
);

router.delete(
  "/:id/attending/:eventId",
  asyncHandler(async function (req, res) {
    const rsvpId = await UserRepository.deleteRSVP(req.params.id, req.params.eventId)
    return res.json(rsvpId)
  })
);

router.get(
  "/:id/hosting",
  asyncHandler(async (_req, res) => {
    let { id } = _req.params;
    const events = await UserRepository.listMyHostingEvents(id);
    return res.json(events);
  })
);


module.exports = router;


