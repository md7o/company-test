import { describe, expect, it } from "vitest";
import { UserSchema } from "./index";

describe("UserSchema", () => {
  it("rejects a bad email", () => {
    const result = UserSchema.safeParse({
      id: "u_1",
      name: "Ada",
      email: "not-an-email",
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.path).toEqual(["email"]);
  });
});
