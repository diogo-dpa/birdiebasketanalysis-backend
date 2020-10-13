const connection = require("../database/connection");

module.exports = {
    getAll(){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await connection("players").select("*");
                resolve(response);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    },

    getOne(player_id){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await connection("players").select("*")
                .where({
                    player_id,
                });
                resolve(response);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    },

    getPlayerById(player_id){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await connection("players").select("*")
                .where({
                    player_id,
                });
                resolve(response);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    },

    getPlayersFromTeam(team_id){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await connection("players").select("*")
                .where({
                    team_id,
                });
                resolve(response);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    },

    getTop3PlayersByPoints(team_id){
        return new Promise(async (resolve, reject) => {
            try {
                // const response = await connection("players").select("*")
                // .join('player_stats', 'players.team_id','player_stats.team_id')
                // .where({
                //     'player_stats.team_id': team_id,
                // })
                // .orderBy('points', 'desc')
                // .distinct()
                // .limit(3);
                const response = await connection("player_stats")
                .orderBy('points', 'desc')
                .where({
                    'player_stats.team_id': team_id,
                })
                // .orderBy('points', 'desc')
                // .distinct()
                .limit(3)
                resolve(response);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }
};
