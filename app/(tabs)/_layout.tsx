
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import {Tabs} from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
        backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
      }} 
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color}:{color:string}) => <FontAwesome6 size={28} name="jar" color={color} />,
        }}
      />
      <Tabs.Screen 
        name="list"
        options={{
          title: "My ideas",
          tabBarIcon: ({color}:{color:string}) => <FontAwesome6 size={28} name="list-ul" color={color} />,
        }}
      />
      <Tabs.Screen 
        name="social"
        options={{
          title: "Social",
          tabBarIcon: ({color}:{color:string}) => <MaterialIcons size={28} name="emoji-people" color={color} />,
        }}
      />
    </Tabs>
  );
}