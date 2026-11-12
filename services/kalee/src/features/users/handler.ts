import { onCall, HttpsError } from "firebase-functions/v2/https";
import { getFirestore } from "firebase-admin/firestore";
import { UserSchema } from "@repo/contracts";
import { saveUser } from "./service";

export const kaleeSaveUser = onCall(async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "Sign in first");
  const parsed = UserSchema.safeParse(request.data);
  if (!parsed.success) throw new HttpsError("invalid-argument", "Invalid user");
  return saveUser(getFirestore(), parsed.data);
});
