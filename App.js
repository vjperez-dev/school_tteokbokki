import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomePage from './screens/HomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import Cooked from './screens/cooked';
import Drinks from './screens/drinks';
import Frozen from './screens/frozen';
import Snack from './screens/Snacks';
import Noodles from './screens/Noodles'
import About from './screens/About';
import Cart from './screens/addtocart';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, SafeAreaView, SectionList, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomePage} />
        <Stack.Screen options={{ headerShown: false }} name="CookedFood" component={Cooked} />
        <Stack.Screen options={{ headerShown: false }} name="FrozenFood" component={Frozen} />
        <Stack.Screen options={{ headerShown: false }} name="Snacks" component={Snack} />
        <Stack.Screen options={{ headerShown: false }} name="Noodles" component={Noodles} />
        <Stack.Screen options={{ headerShown: false }} name="Drinks" component={Drinks} />
        <Stack.Screen options={{ headerShown: false }} name="AboutUs" component={About} />
        <Stack.Screen options={{ headerShown: false }} name="Cart" component={Cart} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});
