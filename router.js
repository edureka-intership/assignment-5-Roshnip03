const express = require("express");
const location = require("./controller/location");
const router = express.Router();

router.get("/getAllLocations", location.getAllLocations);

module.exports = router;
