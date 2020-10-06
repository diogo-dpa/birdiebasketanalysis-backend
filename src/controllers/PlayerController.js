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
}