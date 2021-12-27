// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, ImageBaground, ImageBackground } from 'react-native';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const image = { uri: 'https://images.unsplash.com/photo-1592201426550-83c4be24a0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80' }

export default function App() {
  return (
    <ImageBackground source={image} style={styles.bgimage}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bgimage: {
    width: 'null',
    height: 'null',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})