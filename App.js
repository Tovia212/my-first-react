import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Nav from './Nav';
import "bootstrap/dist/css/bootstrap.min.css"
import{BrowserRouter, Route} from 'react-router-dom';

function App(){
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/service' exact component={Service} />
        <Route path='/contact' exact component={Contact} />
      </BrowserRouter>
    </div>  
  )
}

export default App;