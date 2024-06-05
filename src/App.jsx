import React from 'react';
import HomePage from './components/HomePage';
import './index.css';
import Services from './components/Services';
import OurPresence from './components/OurPresence';
import AuthPage from './components/AuthPage';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Services />
      <Feedback/>
      <OurPresence/>
      <AuthPage/>
       <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;