import React, { Component } from 'react';
import './css/navbar.css';
import logoq from './logo/logoq.png';
import login from './login';
import Home from './Home';
import itema from './items/itema';
import itemb from './items/itemb';
import itemc from './items/itemc';
import itemd from './items/itemd';
import iteme from './items/iteme';
import itemf from './items/itemf';
import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";
import Signup from './signup';
class Navigation extends Component {

  render() {
    return (
      <HashRouter>
      <div className="App">
       <nav className="navbar  navbar-expand-lg navbar-fixed-top ">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <NavLink to="/Help"><i className="fa fa-question" >Help &nbsp;</i></NavLink>
    </li>
    <li className="nav-item">
    <NavLink to="nav-link" href="/Storelocator"> <i className="fa fa-home">Store locator</i></NavLink>
    </li>
  </ul>
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
    <NavLink to="nav-link" href="/Contactus"><i className="fa fa-mobile">Contact us &nbsp; </i></NavLink>
    </li>
    <li className="nav-item">
    <NavLink to="/login"><i className="fa fa-users"> Signin</i></NavLink>&nbsp;
  </li>
  <li className="nav-item">
    <NavLink to="/signup"> / Register</NavLink>
  </li>
  </ul>
</nav>
  < p className="search">
  
  <input type="text" id="search" placeholder="search here ..."/>
  <button type="submit"><i className="fa fa-search"></i></button>
  </p><div className="logo">
  <img src={logoq} alt="my logo"/><p>MATHRUKA NATURAL WELLNESS STORE</p>
  </div>
  
  <div className="menu">
    
    <nav>
      <ul class="nav">
        <li><NavLink  activeClassName="is-active" to="/">Home</NavLink></li>
        <li><a href="#">Grocery</a>
        <ul>
        <li><NavLink to="/itema">Itema</NavLink></li>
        <li><NavLink to="/itemb">Itemb</NavLink></li>
        </ul>
        </li>
        <li><a href="/">Recipes</a>
        <ul>
            <li><a href="/">item a long submenu</a></li>
            <li><NavLink to="/itemc">itemc</NavLink>
            <ul>
              <li><NavLink to="/itemd">itemd</NavLink></li>
              </ul>
          </li>
          <li><NavLink to="/iteme">iteme</NavLink></li>
          </ul>
          </li>
          <li><a href="/">Deals</a>
          <ul>
            <li><NavLink to="/itemf">itemf</NavLink></li>
             </ul>    
            </li>

</ul>
<div className="content">
<Route exact path="/" component={Home}/>
<Route path="/itema" component={itema}/>
<Route path="/itemb" component={itemb}/>
<Route path="/itemc" component={itemc}/>
<Route path="/itemd" component={itemd}/>
<Route path="/iteme" component={iteme}/>
<Route path="/itemf" component={itemf}/>
<Route path="/signup" component={Signup}/>
<Route path="/login" component={login}/>


</div>
</nav>
</div>
  
      </div>
      </HashRouter>
      
    );
  }
}

export default Navigation;