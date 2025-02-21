import { redis } from "../redis/client";
import { RedisStorageType } from "../redis/redis-storage-type";

interface AccessInviteLinkParams {
  subscriberId: string;
}

export async function accessInviteLink({ subscriberId }: AccessInviteLinkParams) {
  await redis.hincrby(RedisStorageType.REFERRAL_ACCESS_COUNT, subscriberId, 1);
}
