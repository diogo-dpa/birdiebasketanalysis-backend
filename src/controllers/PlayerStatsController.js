const PlayerStatsModel = require("../models/PlayerStatsModel");

module.exports = {
    async index(request, response) {
        try {
    
          const result = await PlayerStatsModel.getAll();
          
          return response.status(200).json(result);
        } catch (err) {   
          console.log(err);
          return response.status(500).json({
            notification: "Internal server error while trying to get orders",
          });
        }
      },

    async getPlayerStats(request, response) {
      const { player_id } = request.params;
      try {
  
        const result = await PlayerStatsModel.getPlayerStatsById(player_id);
        
        return response.status(200).json(result);
      } catch (err) {   
        console.log(err);
        return response.status(500).json({
          notification: "Internal server error while trying to get orders",
        });
      }
    },
}