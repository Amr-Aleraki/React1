import React,{Component} from 'react';
import { BrowserRouter , Route} from "react-router-dom";
import "./App.css";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Index from "./components/index";




class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <Navbar/>
            <Route exact path='/' component={Index}/>
            <Route path='/contact' component={Contact}/>
      </BrowserRouter>
    );
  }
}

export default App;

