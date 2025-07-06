import fastify from "fastify";
import cors from "@fastify/cors";
import { mailRoutes } from "./routes/mail";

const app = fastify({ logger: true });

app.register(cors, { origin: "*" });

app.register(mailRoutes);

app.get("/", async () => {
  return { message: "🚀 Api Fastify Está Rodando! Ok" };
});

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("🚀 Servidor rodando em http://localhost:3000");
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();