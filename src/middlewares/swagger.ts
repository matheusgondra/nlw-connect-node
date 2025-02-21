import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import type { FastifyPluginAsync } from "fastify";
import { jsonSchemaTransform } from "fastify-type-provider-zod";

export const swagger: FastifyPluginAsync = async (app) => {
  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "NLW Connect",
        version: "0.0.1"
      }
    },
    transform: jsonSchemaTransform
  });
  app.register(fastifySwaggerUi, {
    routePrefix: "/docs"
  });
};
