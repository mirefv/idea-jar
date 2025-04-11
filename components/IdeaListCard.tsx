import { StyleSheet, Text, View } from "react-native"

type Props = {
  title: string,
}

export default function IdeaListCard ({title}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#80DEEA",
    borderWidth: 2,
    shadowColor: "black",
    width: "70%",
    height: 60,
    position: "relative",
  },
  title: {
    color:"black",
    fontSize: 20,
    flex: 1,
    position: "absolute",
    top: 15,
    left: 5,
  },
});