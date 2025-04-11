import { StyleSheet, TextInput, View } from "react-native";
import Feather from '@expo/vector-icons/Feather'


type Props = {
  defaultText: string
}

export default function SearchBar({defaultText}:Props) {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.search} 
        placeholder={defaultText}
        onChangeText={(input) => {
          let message="You typed "+input;
          alert(message);
        }}
      />
      <Feather name="search" size={12} color="black" />
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      borderWidth: 2,
      borderColor: "black",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "80%",

    },
    search: {
      flex: 1,
    },
  }
)