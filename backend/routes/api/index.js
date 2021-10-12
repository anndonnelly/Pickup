const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const eventsRouter = require("./events.js");
const locationRouter = require("./locations.js")
const typeRouter = require("./types")

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/events", eventsRouter);
router.use("/locations", locationRouter);
router.use("/types", typeRouter);
// router.use("/events/:id", eventsRouter);

module.exports = router;



