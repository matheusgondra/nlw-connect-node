import { redis } from "../redis/client";

interface GetSubscriberInviteClicksParams {
  subscriberId: string;
}

export async function getSubscriberInviteClicks({ subscriberId }: GetSubscriberInviteClicksParams) {
  const counts = await redis.hget("referral:access-count", subscriberId);

  return { count: counts ? Number.parseInt(counts) : 0 };
}
