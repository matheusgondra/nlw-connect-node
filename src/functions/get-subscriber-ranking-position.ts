import { redis } from "../redis/client";
import { RedisStorageType } from "../redis/redis-storage-type";

interface GetSubscriberRakingPositionParams {
  subscriberId: string;
}

export async function getSubscriberRankingPosition({ subscriberId }: GetSubscriberRakingPositionParams) {
  const rank = await redis.zrevrank(RedisStorageType.REFERRAL_RANKING, subscriberId);
  if (rank == null) {
    return { position: null };
  }

  return { position: rank + 1 };
}
