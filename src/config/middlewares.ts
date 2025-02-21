import type { FastifyPluginAsync } from "fastify";
import { cors } from "../middlewares/cors";
import { swagger } from "../middlewares/swagger";

export const middlewares: FastifyPluginAsync = async (app) => {
  app.register(cors);
  app.register(swagger);
};
