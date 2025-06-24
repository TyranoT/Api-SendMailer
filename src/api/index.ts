import fastify from "fastify";
import cors from "@fastify/cors";
import { mailRoutes } from "../routes/mail";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = fastify({ logger: true });

app.register(cors, { origin: "*" });

app.register(mailRoutes);

app.get("/", async (request, reply) => {
  return { message: "🚀 Api Fastify Está Rodando! Ok" };
});

export default async (req: VercelRequest, res: VercelResponse) => {
  await app.ready();
  app.server.emit("request", req, res);
};