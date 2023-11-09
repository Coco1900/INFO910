// server.js
const express = require('express');
const cors = require('cors');
const https = require("https");
const index = express();
index.use(express.static("publics"))
index.use(cors());
/* server configuration here */
// allow CORS
index.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

index.listen(3000, () =>console.log("Serveur à l'écoute"))

index.get('/:id', (req, res) => {
  https.get('https://pokeapi.co/api/v2/pokemon/'+req.params.id+'/', (resp)=>{
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      var parsed = JSON.parse(data);
      res.send(parsed);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});



