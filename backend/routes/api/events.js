const express = require("express");
const asyncHandler = require("express-async-handler");
const EventRepository = require("../../db/events-repository")
const router = express.Router();
const { check } = require("express-validator");



router.get(
  "/",
  asyncHandler(async (req, res) => {
    const events = await EventRepository.listEvents();
    return res.json(events);
}));



// router.post(
//   "/",
//   pokemonValidations.validateCreate,
//   asyncHandler(async function (req, res) {
//     const id = await PokemonRepository.create(req.body);
//     return res.redirect(`${req.baseUrl}/${id}`);
//   })
// );


// router.get(
//   "/events/:id",
//   asyncHandler(async (req, res) => {
//     const events = await EventRepository.eventsByOwnerId(req.params.id);
//     return res.json(events);
//   })
// );

// router.get(
//   "/:id/items",
//   asyncHandler(async function (req, res) {
//     const items = await ItemsRepository.itemsByPokemonId(req.params.id);
//     return res.json(items);
//   })
// );

module.exports = router;

