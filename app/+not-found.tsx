import { Link, Stack } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{title:"Oops!"}} />
      <View style={styles.container}>
        <Text>This page does not exist</Text>
        <Link style={styles.link} href="/">Go back to the main screen!</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    color: "blue",
    textDecorationLine: "underline",
  },
});
