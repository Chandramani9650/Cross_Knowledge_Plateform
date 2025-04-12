import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Categories from '../components/Categories'
// import Footer from '../components/Footer'
import SignUp from './SignUp'
import Login from './SignIn'
import About from './About'
import Contact from './Contact'
import MyProfile from './MyProfile'
import NotFoundPage from './NotFoundPage'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Header/>
      <Categories/>
      <SignUp/>
      {/* <Login/> */}
      <About/>
      <Contact/>
      {/* <MyProfile/> */}
     <Footer/>
   
    </div>
  )
}

export default Home
