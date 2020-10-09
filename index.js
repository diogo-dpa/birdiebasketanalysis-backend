const express = require("express");
const app = express();
const cors = require('cors')

// const pool = require('./src/database/db');

const routes = require('./src/routes/index');


app.use(cors());
app.use(express.json());
app.use(routes);

// app.post("/teste", async (request, response) => {
//     try{
//         const { payload } = request.body; 
//         const result = await pool.query(`${payload}`);
        
//         response.json(result.rows);
//     }catch(err){
//         console.log(err.message);
//     }
// });

app.listen(3333, () => {
    console.log("Listening on port 3333");
});