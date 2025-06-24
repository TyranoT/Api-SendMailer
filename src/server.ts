import Fastify from 'fastify';
import cors from '@fastify/cors';
import { mailRoutes } from './routes/mail';

const server = Fastify();

server.register(cors, {
  origin: '*'
});

server.register(mailRoutes, { prefix: '/api' });

server.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
