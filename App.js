import {StyleSheet, Text, SafeAreaView, StatusBar, View} from 'react-native';
import {ClerkProvider, SignedIn, SignedOut} from '@clerk/clerk-expo';
import SignInWithOAuth from './App/Components/SignInWithOAuth';
import Home from "./App/Screens/Home";
import Login from "./App/Screens/Login";
import {NavigationContainer} from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import {useFonts} from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Outfit-Light': require('./assets/fonts/Outfit-Light.ttf'),
    'Outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-SemiBold': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null
  }

  return (
      <ClerkProvider publishableKey={"pk_test_bGlnaHQtc2hhZC05My5jbGVyay5hY2NvdW50cy5kZXYk"}>
        {/*<SafeAreaView>*/}
          <View style={styles.container}>
            <StatusBar hidden />
            <SignedIn>
              <NavigationContainer>
                <TabNavigation/>
              </NavigationContainer>
            </SignedIn>
            <SignedOut>
              <Login/>
            </SignedOut>
          </View>
        {/*</SafeAreaView>*/}
      </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
