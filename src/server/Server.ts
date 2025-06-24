import express from 'express';
import cors from 'cors'
import { router } from './routes'; 
const server = express()

server.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
server.use(express.json({ limit: '1mb' }))
server.use(router)


export { server }