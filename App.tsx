/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { TurboModuleRegistry } from 'react-native';
import type { Spec as BatterySpec } from './js/modules/RCTBatteryModuleType';
import React, { useEffect } from 'react';

import NativeLocalStorage from './specs/NativeLocalStorage';
import NativeCPractice from './specs/NativeCPractice';

function App() {
  const [value, setValue] = React.useState<string>('');

  const [editingValue, setEditingValue] = React.useState<string | null>(null);

  const [reversedValue, setReversedValue] = React.useState('');

  const onPress = () => {
    const revString = NativeCPractice.reverseString(value);
    setReversedValue(revString);
  };

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

  useEffect(() => {
    const storedValue = NativeLocalStorage?.getItem('myKey');
    setValue(storedValue ?? '');
  }, []);

  function saveValue() {
    NativeLocalStorage?.setItem(editingValue ?? EMPTY, 'myKey');
    setValue(editingValue);
  }

  function clearAll() {
    NativeLocalStorage?.clear();
    setValue('');
  }

  function deleteValue() {
    NativeLocalStorage?.removeItem('myKey');
    setValue('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Current stored value is: {value ?? 'No Value'}
      </Text>
      <TextInput
        placeholder="Enter the text you want to store"
        style={styles.textInput}
        onChangeText={setEditingValue}
      />
      <Button title="Save" onPress={saveValue} />
      <Button title="Delete" onPress={deleteValue} />
      <Button title="Clear" onPress={clearAll} />
      <View>
        <Text style={styles.title}>
          Welcome to C++ Turbo Native Module Example
        </Text>
        <Text>Write down here he text you want to revert</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Write your text here"
          onChangeText={setValue}
          value={value}
        />
        <Button title="Reverse" onPress={onPress} />
        <Text>Reversed text: {reversedValue}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    margin: 10,
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  textInput: {
    margin: 10,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
});

export default App;
