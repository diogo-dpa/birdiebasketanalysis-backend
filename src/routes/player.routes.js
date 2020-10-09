const express = require('express');
const playerRouter = express.Router();

const PlayerController = require('../controllers/PlayerController');

// Para Jogadores
playerRouter.get('/', PlayerController.index);

playerRouter.get('/team/:team_id', PlayerController.getPlayersFromTeam);

module.exports = playerRouter;