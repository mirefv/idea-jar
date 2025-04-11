//TODO

import { View, StyleSheet, Text } from "react-native";

/**
 * Social features are not implemented yet, 
 * display a message that says it's coming soon, 
 * add a link to the home tab
 * 
 */

export default function Social() {
  return (
    <View style={styles.container}>
      <Text>Social features are coming soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});