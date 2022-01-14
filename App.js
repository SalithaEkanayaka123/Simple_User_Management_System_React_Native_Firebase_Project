import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from './app/Components/Screens/Screen';
import Homescreen from './app/Components/Screens/HomeScreen';
import Loginscreen from './app/Components/Screens/LoginScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Screen>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Loginscreen} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Homescreen} />



        </Stack.Navigator>
      </NavigationContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
