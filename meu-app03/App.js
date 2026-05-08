import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorageExemplo from './components/AsyncStorageExemplo';

export default function App() {
  return (
    <View style={styles.container}>
      <AsyncStorageExemplo />
    </View>
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
