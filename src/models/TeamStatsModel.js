const connection = require("../database/connection");

module.exports = {
    getTeamStatsById(team_id){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await connection("team_stats").select("*")
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
