import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {RegistrationScreen, LoginScreen, PostsScreen} from './src/screens'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <RegistrationScreen/>
      {/* <LoginScreen /> */}
      {/* <PostsScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  
});
