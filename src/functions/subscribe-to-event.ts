import { eq } from "drizzle-orm";
import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/schema/subscriptions";

interface SubscribeToEventParams {
  name: string;
  email: string;
}

export async function subscribeToEvent({ name, email }: SubscribeToEventParams) {
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

  return {
    subscriberId: newSubscribe.id
  };
}
