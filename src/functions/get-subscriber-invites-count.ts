import { redis } from "../redis/client";

interface GetSubscriberInvitesCountParams {
  subscriberId: string;
}

export async function getSubscriberInvitesCount({ subscriberId }: GetSubscriberInvitesCountParams) {
  const counts = await redis.zscore("referral:ranking", subscriberId);

  return { count: counts ? Number.parseInt(counts) : 0 };
}
