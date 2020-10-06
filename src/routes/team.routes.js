const express = require('express');
const teamRouter = express.Router();

const TeamController = require('../controllers/TeamController');

// Para Times
teamRouter.get('/', TeamController.index);

module.exports = teamRouter;