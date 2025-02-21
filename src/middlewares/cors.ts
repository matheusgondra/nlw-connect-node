import fastifyCors from "@fastify/cors";
import type { FastifyPluginAsync } from "fastify";

export const cors: FastifyPluginAsync = async (app) => {
  app.register(fastifyCors);
};
