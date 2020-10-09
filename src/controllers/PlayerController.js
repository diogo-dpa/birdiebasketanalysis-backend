const PlayerModel = require("../models/PlayerModel");

module.exports = {
    async index(request, response) {
        try {
    
          const result = await PlayerModel.getAll();
          
          return response.status(200).json(result);
        } catch (err) {   
          console.log(err);
          return response.status(500).json({
            notification: "Internal server error while trying to get orders",
          });
        }
      },

    async getPlayersFromTeam(request, response) {

        const {team_id} = request.params;

        try {
    
          const result = await PlayerModel.getPlayersFromTeam(team_id);
          
          return response.status(200).json(result);
        } catch (err) {   
          console.log(err);
          return response.status(500).json({
            notification: "Internal server error while trying to get orders",
          });
        }
      },
}