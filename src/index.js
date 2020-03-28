import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import './config/ReactotronConfig';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Bem vindo ao RN</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
