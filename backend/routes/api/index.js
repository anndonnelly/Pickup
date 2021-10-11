const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const eventsRouter = require("./events.js");
const locationRouter = require("./locations.js")

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/events", eventsRouter);
router.use("/locations", locationRouter);
module.exports = router;



