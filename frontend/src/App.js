import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap' 
import HomeScreen from './screens/HomeScreen';

const App= () => {
  return (
    <>
      <main>
        <Header />
        
        <Container className='py-3'>
          <HomeScreen />
        </Container>
        
        <Footer />
        
      </main>
    
    </>
  );
}

export default App;
