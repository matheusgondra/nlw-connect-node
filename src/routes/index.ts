import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { accessInviteLinkRoute } from "./access-invite-link-route";
import { getRankingRoute } from "./get-ranking-route";
import { getSubscriberInviteClicksRoute } from "./get-subscriber-invite-click-route";
import { getSubscriberInvitesCountRoute } from "./get-subscriber-invites-count-route";
import { getSubscriberRankingPositionRoute } from "./get-subscriber-ranking-position-route";
import { subscribeToEventRoute } from "./subscribe-to-event-route";

export const routes: FastifyPluginAsyncZod = async (app) => {
  app.register(subscribeToEventRoute);
  app.register(accessInviteLinkRoute);
  app.register(getSubscriberInviteClicksRoute);
  app.register(getSubscriberInvitesCountRoute);
  app.register(getSubscriberRankingPositionRoute);
  app.register(getRankingRoute);
};
