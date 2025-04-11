import FloatingActionButton from "@/components/FloatingActionButton";
import IdeaList from "@/components/IdeaList";
import SearchBar from "@/components/SearchBar";
import { View, StyleSheet } from "react-native";

export default function List() {
  return (
    <View style={styles.container}>
      <SearchBar defaultText="Search your ideas"/>
      <IdeaList />
      <FloatingActionButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});