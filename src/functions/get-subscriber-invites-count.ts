import { redis } from "../redis/client";
import { RedisStorageType } from "../redis/redis-storage-type";

interface GetSubscriberInvitesCountParams {
  subscriberId: string;
}

export async function getSubscriberInvitesCount({ subscriberId }: GetSubscriberInvitesCountParams) {
  const counts = await redis.zscore(RedisStorageType.REFERRAL_RANKING, subscriberId);

  return { count: counts ? Number.parseInt(counts) : 0 };
}
