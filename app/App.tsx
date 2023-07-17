import React from 'react';
import { Button, StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  const openEdge = () => {
    fetch('http://192.168.15.98:3000/abrirNetflix', { method: 'GET' })
      .then(response => response.text())
      .then(text => {
        console.log(text);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text>Clique aqui:</Text>
      <Button title="Abrir Edge2" onPress={openEdge} />
      <StatusBar style="auto" />
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
