import React, { Component } from 'react';
import Help from './Help';
import {Route , HashRouter} from 'react-router-dom'
import Storelocator from './Storelocator';
import Contactus from './Contactus';
import signup from './signup';
class Content extends Component {
    
    render() { 
        return (  <HashRouter>
        
       
        <div className="content">
        <Route path='/Help' component={Help}/>
        <Route path='/Storelocator' component={Storelocator}/>
        <Route path='/Contactus' component={Contactus}/>
        <Route path='/signup' component={signup}/>
        </div> 
        
        </HashRouter>
        );
    }
}
 
export default Content;
