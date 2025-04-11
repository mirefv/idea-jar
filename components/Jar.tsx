import { View, StyleSheet, Pressable } from "react-native";


export default function Jar() {
  return (
    <View style={styles.container}>
      <View style={{
        height: "13%",
        width: "82%",
        alignSelf: "center",
        backgroundColor: "#c1d1d4",
        borderRadius: "5%",
      }}/>
      <View style={{
        height: "6%",
        width: "64%",
        alignSelf: "center",
        backgroundColor: "#e6202a",
      }}/>
      <View style={{height: "80%", width:"100%"}}>
        <Pressable
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#5cbde0",
            alignSelf: "center",
            borderRadius: 50,
          }} 
          onPress={() => {alert("Jar clicked!")}}
        />
        <Pressable 
          style={{
            height: "25%",
            width: "18%",
            backgroundColor: "#996329",
            position: "absolute",
            top: 0,
            right: "27%",
          }}
          onPress={() => {alert("Tag clicked!")}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 11/15,
    padding: 50,
  },
});