import { colors } from "@repo/tokens";
import type { User } from "@repo/contracts";

const demo: User = { id: "1", name: "Admin", email: "a@kalee.app" };

export default function Page() {
  return <h1 style={{ color: colors.primary }}>Hello {demo.name}</h1>;
}
