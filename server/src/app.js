const express = require("express");
const configureRoutes = require("./controllers");
const { handleRequest, handleError } = require("./middlewares");
const compression = require('compression');
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const pino = require('pino-http')();
require('dotenv').config();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000 // limit each IP to 1000 requests per windowMs
});

const app = express();
app.use(compression());
app.use(cors());
app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(pino);
app.use(handleRequest);

configureRoutes(app);
app.use(handleError);

module.exports = app;