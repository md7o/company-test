import type { Firestore } from "firebase-admin/firestore";
import type { User } from "@repo/contracts";

export async function saveUser(db: Firestore, user: User) {
  await db.collection("users").doc(user.id).set(user);
  return { ok: true };
}
