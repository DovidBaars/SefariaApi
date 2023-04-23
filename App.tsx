import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Main from "./src/Components/Main";
import Header from "./src/Components/Header";

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Header/>
      <Main/>
    </SafeAreaView>
  );
}

export default App;
