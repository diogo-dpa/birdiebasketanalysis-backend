const express = require('express');
const playerRouter = express.Router();

const PlayerController = require('../controllers/PlayerController');

// Para Jogadores
playerRouter.get('/', PlayerController.index);

playerRouter.get('/team/:team_id', PlayerController.getPlayersFromTeam);

playerRouter.get('/team/:team_id/top3/points', PlayerController.getTop3PlayersByPointsFromTeam);

module.exports = playerRouter;