import { server } from '../src/server/Server';
import serverless from 'serverless-http';

export default serverless(server);