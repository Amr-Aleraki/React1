import React,{Component} from 'react';

import About from "./../about";
import Footer from "./../footer";
import Home from "./../home";
import Portfolio from "./../portfolio";
import Profile from "./../profile";
import Social from "./../social";
import Work from "./../work";




class Index extends Component {
  render() {
    return (
      <div>
            <Home/>
            <Work/>
            <Portfolio/>
            <Profile/>
            <About/>
            <Social/>
            <Footer/>
      </div>
    );
  }
}

export default Index;

