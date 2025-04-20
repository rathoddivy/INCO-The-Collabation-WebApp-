import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Brands from './Pages/Brands/Brands';
import Influencers from './Pages/Influancers/Influencers';
import Support from './Pages/Contact and Support/Support';
import Sign from './Pages/Sign and Signup/Sign';
import Footer from './Components/Footer/Footer';
import Brand from './Dashbords/Brands/brand';
import Infualncer from './Dashbords/Infualncer/Infualncer';
import Login from './Pages/Sign and Signup/Login';
 

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route  path='/' element = {<Home />} />
        <Route  path='/Services' element = {<Services />} />
        <Route  path='/About' element = {<About />} />
        <Route  path='/Brands' element = {<Brands />} />
        <Route  path='/Influancer' element = {<Influencers />} />
        <Route  path='/Contact' element = {<Support />} />
        <Route  path='/Sign' element = {<Sign />} />
        <Route  path='/brand' element = {<Brand />} />
        <Route  path='/influencer' element = {<Infualncer />} />
        <Route path = '/Login' element= {<Login />} />

      </Routes>
      </Router>
 <Footer />
    </div>
  )
}

export default App
