const express = require("express");
const {json} = require("body-parser");


const app = express();  
const moviesCtrl = require("./controllers/controller")
//middle wares
app.use(json() );

app.get("/api/movies",moviesCtrl.getMovies);
app.post("/api/movies",moviesCtrl.postMovies);
app.put("/api/movies/:id",moviesCtrl.updateMovies);
app.delete("/api/movies/:id",moviesCtrl.deleteMovies);


const port =3001;

app.listen(port,()=>console.log(`Listening on :${port}`));
