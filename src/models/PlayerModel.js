const connection = require("../database/connection");

module.exports = {
    getAll(){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await connection("players").select("*")
                .limit(50);
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
    }
};
