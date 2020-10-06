
const express = require('express');

const teamRouter = require('./team.routes.js');
const teamStatsRouter = require('./teamStats.routes');
const playerRouter = require('./player.routes');
const playerStatsRouter = require('./playerStats.routes');

const routes = express.Router();

routes.use('/team', teamRouter);
routes.use('/teamstats', teamStatsRouter);
routes.use('/player', playerRouter);
routes.use('/playerstats', playerStatsRouter);

module.exports = routes;