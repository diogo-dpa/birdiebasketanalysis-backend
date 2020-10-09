const express = require('express');
const teamRouter = express.Router();

const TeamController = require('../controllers/TeamController');

// Para Times
teamRouter.get('/', TeamController.index);

teamRouter.get('/:team_id', TeamController.getTeam);

module.exports = teamRouter;