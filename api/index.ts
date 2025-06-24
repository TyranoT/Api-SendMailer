import Fastify from 'fastify';
import cors from '@fastify/cors';
import { mailRoutes } from '../src/routes/mail';
import serverless from 'serverless-http';

const app = Fastify();

app.register(cors, { origin: '*' });
app.register(mailRoutes, { prefix: '/api' });

export default serverless(app as any);
