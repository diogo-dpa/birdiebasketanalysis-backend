const connection = require("../database/connection");

module.exports = {
    getAll(){
        return new Promise(async (resolve, reject) => {
            try {
                const response = await connection("player_stats").select("*");
                resolve(response);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }
};
