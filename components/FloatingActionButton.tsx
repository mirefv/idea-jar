import { TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";


export default function FloatingActionButton() {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 70,
        backgroundColor: 'red',
        borderRadius: 100,
      }}
      onPress={() => {alert("Button has been pressed")}}
      >
        <FontAwesome6 size={28} name="plus" color="white" />
    </TouchableOpacity>
  );
}