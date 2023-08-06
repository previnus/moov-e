import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

const App = () => {

  useEffect(() => {
    console.log('react initiated');
  }, []);

  return (
    <>
    <h1 class="text-3xl font-bold underline text-[#b91c1c]">Hello MOOV-e</h1>
    <Header />
    <Footer />
    </>
  )
}

export default App
