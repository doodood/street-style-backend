import { createServer } from 'http';
import { appConfig } from './config/app.config';

const server = createServer((req,res) => {
    res.statusCode = 200
}).listen(appConfig.server.port, appConfig.server.hostname, () => {
    console.log(`Server running at http://${appConfig.server.hostname}:${appConfig.server.port}/`);
});