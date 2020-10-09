const TeamStatsModel = require("../models/TeamStatsModel");

module.exports = {
    async getTeamStats(request, response) {

      const { team_id } = request.params;
        try {
    
          const result = await TeamStatsModel.getTeamStatsById(team_id);
          
          return response.status(200).json(result);
        } catch (err) {   
          console.log(err);
          return response.status(500).json({
            notification: "Internal server error while trying to get orders",
          });
        }
      },
}