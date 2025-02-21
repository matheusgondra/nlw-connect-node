import { eq } from "drizzle-orm";
import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/schema/subscriptions";
import { redis } from "../redis/client";
import { RedisStorageType } from "../redis/redis-storage-type";

interface SubscribeToEventParams {
  name: string;
  email: string;
  referrerId?: string | null;
}

export async function subscribeToEvent({ name, email, referrerId }: SubscribeToEventParams) {
  const [subscribe] = await db.select().from(subscriptions).where(eq(subscriptions.email, email));
  if (subscribe) {
    return {
      subscriberId: subscribe.id
    };
  }

  const [newSubscribe] = await db
    .insert(subscriptions)
    .values({
      name,
      email
    })
    .returning();

  if (referrerId) {
    await redis.zincrby(RedisStorageType.REFERRAL_RANKING, 1, referrerId);
  }

  return {
    subscriberId: newSubscribe.id
  };
}
