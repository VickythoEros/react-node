const express = require('express');
require('dotenv').config({path:"./config/.env"})

require('./config/db');

const app = express();

const PORT = parseInt(process.env.PORT) ;

app.listen(PORT,()=>{
    console.log(`server lancé sur le port : ${PORT}`)
})


