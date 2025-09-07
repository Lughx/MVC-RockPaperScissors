import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Playground } from './app/Playground.view';
import { AppBar } from '@react-native-material/core';

export default function App() {
  return (
    <SafeAreaView spacing={5} style={styles.container}>
      <AppBar style={{"backgroundColor":"#57d1b7ff"}} title="Rock, Paper, Scissors" />
      <Playground/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});