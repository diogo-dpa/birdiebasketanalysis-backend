const connection = require("../database/connection");

module.exports = {
    getAll(){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await connection("teams").select("*");
                resolve(response);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    },

    getTeamById(team_id){
        return new Promise(async (resolve, reject) => {

            
            try {
                const response = await connection("teams").select("*")
                .where({
                    team_id
                });
                resolve(response);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }
};
