const express = require("express");

const router = express.Router();

const { sayHello } = require("../controllers/games.controller");
// const gameController = require("../controllers/games.controller");

router.get("/", sayHello);
// router.get("/", gameController.sayHello);

module.exports = router;
