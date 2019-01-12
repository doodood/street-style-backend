import { createServer } from 'http';
import { appConfig } from './config/app.config';
import * as express from 'express';
import { loader } from './app/services/loader';

const app = express();
const router = express.Router();

loader(__dirname + "/app/routes/", router);

app.use('/',router);

createServer(app).listen(appConfig.server.port, appConfig.server.hostname, () => {
    console.log(`Server running at http://${appConfig.server.hostname}:${appConfig.server.port}/`);
})
