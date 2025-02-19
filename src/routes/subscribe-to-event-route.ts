import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { subscribeToEvent } from "../functions/subscribe-to-event";

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/subscriptions",
    {
      schema: {
        summary: "Subscribes someone to the event",
        tags: ["Subscriptions"],
        body: z.object({
          name: z.string(),
          email: z.string().email()
        }),
        response: {
          201: z.object({
            subscribeId: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { name, email } = request.body;

      const { subscribeId } = await subscribeToEvent({ name, email });

      return reply.status(201).send({ subscribeId });
    }
  );
};
