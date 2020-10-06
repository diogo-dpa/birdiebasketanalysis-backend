const express = require('express');
const playerStatsRouter = express.Router();

const PlayerStatsController = require('../controllers/PlayerStatsController');

// Para Estatística do Jogadores
playerStatsRouter.get('/', PlayerStatsController.index);

module.exports = playerStatsRouter;