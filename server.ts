import { createServer } from 'http';
import { appConfig } from './config/app.config';
import * as express from 'express';
import { loader } from './app/services/loader';
import * as cluster from 'cluster';

const utils = require('./app/helpers/utils');

if(cluster.isMaster) {
    
    utils.info('CLUSTER: Master process started.');
    const cpu: number = require("os").cpus().length;

    for(let i = 0; i < cpu; i++) {
        cluster.fork();
    }

} else {

    const app = express();
    const router = express.Router();

    loader(__dirname + "/app/routes/", router);

    app.use('/',router);

    createServer(app).listen(appConfig.server.port, appConfig.server.hostname, () => {
        utils.info(`Server running at http://${appConfig.server.hostname}:${appConfig.server.port}/`);
    })

}
