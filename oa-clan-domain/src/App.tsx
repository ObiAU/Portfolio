import React from 'react';
import './format/App.css';
import { ChakraProvider, theme} from '@chakra-ui/react';
import Layout from './layout';

function App() {
  return (
      <ChakraProvider theme={theme}>
        <Layout />
      </ChakraProvider>
  );
}

export default App;
