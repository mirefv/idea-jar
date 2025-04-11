import { Pressable } from "react-native";
import Feather from '@expo/vector-icons/Feather'


export default function ProfileButton() {
  return(
    <Pressable
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        position: 'absolute',
        top: 10,
        right: 10,
        height: 40,
        opacity: 0.6,
      }}
      onPress={() => {alert("Help button has been pressed")}}
    >
      <Feather size={28} name="help-circle" color="black" />
    </Pressable>
  );
}