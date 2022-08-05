import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import Header from './components/header/Header';
import Banner from './components/Banner';
import MainBody from './components/Activity';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <MainBody />
      <Footer />
    </>
  );
}

export default App;
