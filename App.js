import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppPagina from './AppPagina';
import MinhaBiografia from './MinhaBiografia';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" }}
         style={{width: 350, height: 200}}
      />
      <Text style={styles.corTexto}>Bem Vindo ao meu App!</Text>
      <AppPagina />
      <StatusBar style="auto" />
      <View>
        <MinhaBiografia/>
      </View>
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
  corTexto: {
    color: '#0fa7b5'
  },
});
