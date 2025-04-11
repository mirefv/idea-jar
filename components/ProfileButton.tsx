import { Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'


export default function ProfileButton() {
  return(
    <Pressable
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        position: 'absolute',
        top: 10,
        left: 10,
        height: 50,
      }}
      onPress={() => {alert("Profile bnutton has been pressed")}}
    >
      <Ionicons size={28} name="person-circle-outline" color="black" />
    </Pressable>
  );
}