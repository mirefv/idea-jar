import { FlatList, StatusBar, StyleSheet, Text, Pressable, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


type Props = {
  title: string,
}

function Item({title}:Props) {
  return (
    <Pressable 
      style={styles.item}
      onPress={() => {
        let message = "Idea "+title+" was pressed!";
        alert(message);
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

export default function IdeaList() {
  return (
    <SafeAreaProvider style={{flex:15}}>
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={sampleData}
          renderItem={({item}) => <Item title={item.title} />}
        >
        </FlatList>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 20,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "#80DEEA",
    borderWidth: 3,
  },
  title: {
    fontSize: 32,
  },
  searchBar: {
    borderColor: "black",
    borderWidth: 2,
    height: 20,
  }
});


const sampleData = [
  {
    title: "idea 1",
    description: "desc 1",
    link: "link 1",
  },
  {
    title: "idea 2",
    description: "desc 2",
    link: "link 2",
  },
  {
    title: "idea 3",
    description: "desc 3",
    link: "link 3",
  },
  {
    title: "idea 4",
    description: "desc 4",
    link: "link 4",
  },
  {
    title: "idea 5",
    description: "desc 5",
    link: "link 5",
  },
  {
    title: "idea 6",
    description: "desc 6",
    link: "link 6",
  },
  {
    title: "idea 7",
    description: "desc 7",
    link: "link 7",
  },
  {
    title: "idea 8",
    description: "desc 8",
    link: "link 8",
  },
  {
    title: "idea 9",
    description: "desc 9",
    link: "link 9",
  },
  {
    title: "idea 10",
    description: "desc 10",
    link: "link 10",
  },
  {
    title: "idea 11",
    description: "desc 11",
    link: "link 11",
  },
]