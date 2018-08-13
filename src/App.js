import React, { Component } from 'react';
import Navigation from './Components/navbar';
import Footer from './Components/footer';


class App extends Component {
  render() { 
    return ( 
      <div className="Header">
     <Navigation />
     
      <div className="Footer">
      <Footer />
      </div>
      </div>
     );
  }
}
 
export default App;