import express from "express"
import morgan from "morgan"
import myrouter from './routes/routes.js'
import config from './config.js'

//const express = require('express');
//const morgan = require('morgan');

const app = express()

//Set parameters    
app.set("port", config.port)

app.use(morgan('dev'))
app.use(express.json());

//Go to endpoints
app.use(myrouter)


export default app