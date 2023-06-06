import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MovieProvider } from './src/context/MoviesContext';
import { Home } from './src/screens/Home';
import { MyList } from './src/screens/MyList';
import { Search } from './src/screens/Search';
import { Details } from './src/screens/Details';
import { Settings } from './src/screens/Settings';
import { House, BookmarkSimple, MagnifyingGlass, Gear } from "phosphor-react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <MovieProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#242A32",
              height: 78,
              justifyContent: "space-between",
              borderTopWidth: 1,
              borderTopColor: "#0296E5",
            },
            tabBarActiveTintColor: "#0296E5",
            tabBarInactiveTintColor: "#67686D",
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <House color={color} size={30} weight="light" />
              ),
            }}
          />
          <Tab.Screen
            name="Details"
            component={Details}
            options={{ tabBarButton: () => null }}
          />
          <Tab.Screen
            name="MyList"
            component={MyList}
            options={{
              tabBarIcon: ({ color }) => (
                <BookmarkSimple color={color} size={30} weight="light" />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({ color }) => (
                <MagnifyingGlass color={color} size={30} weight="light" />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ color }) => (
                <Gear color={color} size={30} weight="light" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" translucent backgroundColor="#242A32" />
    </MovieProvider>
  );
}