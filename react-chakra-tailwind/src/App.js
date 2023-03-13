import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Main from './components/Home';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Main />
    </ChakraProvider>
  );
}

export default App;
