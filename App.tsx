/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { NativeModules } from 'react-native';

import { TurboModuleRegistry } from 'react-native';
import type { Spec as BatterySpec } from './js/modules/RCTBatteryModuleType';
import { useEffect } from 'react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const BatteryModule =
      TurboModuleRegistry.get<BatterySpec>('RCTBatteryModule');
    if (BatteryModule != null) {
      const level = BatteryModule.getBatteryLevel();
      const charging = BatteryModule.isCharging();
      console.log('[BatteryModule] Battery Level:', level);
      console.log('[BatteryModule] Is Charging:', charging);
    } else {
      console.warn('BatteryModule not available!');
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
