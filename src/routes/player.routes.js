const express = require('express');
const playerRouter = express.Router();

const PlayerController = require('../controllers/PlayerController');

// Para Jogadores
playerRouter.get('/', PlayerController.index);

module.exports = playerRouter;