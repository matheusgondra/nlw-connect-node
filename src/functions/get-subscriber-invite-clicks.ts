import { redis } from "../redis/client";
import { RedisStorageType } from "../redis/redis-storage-type";

interface GetSubscriberInviteClicksParams {
  subscriberId: string;
}

export async function getSubscriberInviteClicks({ subscriberId }: GetSubscriberInviteClicksParams) {
  const counts = await redis.hget(RedisStorageType.REFERRAL_ACCESS_COUNT, subscriberId);

  return { count: counts ? Number.parseInt(counts) : 0 };
}
