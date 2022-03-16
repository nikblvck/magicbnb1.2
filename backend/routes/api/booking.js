const router = require("express").Router();
const asyncHandler = require("express-async-handler")
const db = require("../../db/models");
const {Spot, Booking, Image, Review} = db;
const { Op } = require("sequelize");
const {check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { response } = require("express");

router.get("/",
asyncHandler(async(req, res) => {
  const Bookings = await Booking.findAll();
  return res.json(Bookings);
  }));

  module.exports = router;
