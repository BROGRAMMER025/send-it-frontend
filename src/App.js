import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ContactForm from './Components/ContactForm';
import ContactSidebar from './Components/ContactSidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  return (
    <div className="App">
     <Navbar/> {/* Render the Navbar component */}
     <div className="app-container">
    <div className="contact-form-container">
      <ContactForm />
    </div>
    <ContactSidebar />
  </div>

    </div>
    
  );
}

export default App;
