import { initializeApp } from "firebase-admin/app";
import { onRequest } from "firebase-functions/v2/https";

initializeApp();

export const kaleeHealth = onRequest((_req, res) => {
  res.send("ok");
});
export * from "./features/users/handler";
