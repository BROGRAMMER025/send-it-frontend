import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';

function Parcel() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          <Route path="/service">
            <ServiceComponent />
          </Route>
          <Route path="/contact-us">
            <ContactUsComponent />
          </Route>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Parcel;
