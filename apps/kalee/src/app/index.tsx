import { Text, View } from "react-native";
import { colors } from "@repo/tokens";
import type { User } from "@repo/contracts";

const demo: User = { id: "1", name: "Kalee", email: "k@kalee.app" };

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: colors.primary, fontSize: 24 }}>Hello {demo.name}</Text>
    </View>
  );
}
