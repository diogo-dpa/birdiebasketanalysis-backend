const express = require('express');
const teamStatsRouter = express.Router();

const TeamStatsController = require('../controllers/TeamStatsController');

// Para Estatística do Time
teamStatsRouter.get('/:team_id', TeamStatsController.getTeamStats);

module.exports = teamStatsRouter;