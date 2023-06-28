import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Appearance,
} from 'react-native';
import React, {useEffect} from 'react';
import RootNavigator from './src/navigation/BottomTabNavigator';
import useColorScheme from './src/hooks/useColorScheme';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

const App = () => {
  const theme = useColorScheme();

  const [colorScheme, setColorScheme] = React.useState(
    Appearance.getColorScheme(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setColorScheme(Appearance.getColorScheme());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const isDarkMode = colorScheme === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer theme={theme === 'dark' ? DarkTheme : DarkTheme}>
        <RootNavigator />
      </NavigationContainer>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={isDarkMode ? 'black' : 'black'}
        translucent={true}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
