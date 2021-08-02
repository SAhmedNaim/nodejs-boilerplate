const logger = require('pino')();
const app = require('./app');

const connectWithDb = require("./mongo");

const PORT = 5000;
app.listen(PORT, () => {
    connectWithDb();
    console.log(`Server is running on port: http://localhost::${PORT}`);
    logger.info(`Server is running on port: http://localhost::${PORT}`);
});