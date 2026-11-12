import { describe, expect, it, vi } from "vitest";
import type { Firestore } from "firebase-admin/firestore";
import { saveUser } from "./service";

describe("saveUser", () => {
  it("writes the user to users/{id}", async () => {
    const set = vi.fn().mockResolvedValue(undefined);
    const doc = vi.fn(() => ({ set }));
    const collection = vi.fn(() => ({ doc }));
    const db = { collection } as unknown as Firestore;
    const user = { id: "u_1", name: "Ada", email: "ada@example.com" };

    await expect(saveUser(db, user)).resolves.toEqual({ ok: true });
    expect(collection).toHaveBeenCalledWith("users");
    expect(doc).toHaveBeenCalledWith("u_1");
    expect(set).toHaveBeenCalledWith(user);
  });
});
