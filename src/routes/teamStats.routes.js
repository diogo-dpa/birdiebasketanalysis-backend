const express = require('express');
const teamStatsRouter = express.Router();

const TeamStatsController = require('../controllers/TeamStatsController');

// Para Estatística do Time
teamStatsRouter.get('/', TeamStatsController.index);

module.exports = teamStatsRouter;