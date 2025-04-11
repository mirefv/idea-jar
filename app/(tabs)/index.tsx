import { View } from "react-native";

import FloatingActionButton from "@/components/FloatingActionButton";
import Jar from "@/components/Jar";
import ProfileButton from "@/components/ProfileButton";
import HelpButton from "@/components/HelpButton";



export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:40,
      }}
    >
      <ProfileButton />
      <HelpButton />
      <Jar />
      <FloatingActionButton />
    </View>
  );
}
