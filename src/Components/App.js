import React from 'react';

import ContactForm from './ContactForm'; 
import NavBar from './NavBar';
import Parcel from './Parcel';
import Home from './Home';
import Login from './Login';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} /> {/* Define Home route */}
        
        <Route path="/contact" component={ContactForm} /> {/* Define Contact route */}
        <Route path="/parcel" component= {Parcel}/>
        <Route path="/login" component={Login} />
       
       
        
      </Switch>
    </Router>
  );
}




export default App;
