import express from "express"
import morgan from "morgan"

//const express = require('express');
//const morgan = require('morgan');

const app = express()

app.set("port",3000)
app.use(morgan('dev'))

export default app