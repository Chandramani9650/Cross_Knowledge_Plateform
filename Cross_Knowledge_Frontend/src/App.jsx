import { useState } from 'react'
import pic from './assets/kalapath.png'
import { Routes, Route } from 'react-router-dom'
import AllRoutes from './Routes/AllRoutes'
import CustomNav from './components/CustomNav'
// import Home from './pages/Home'
// import SignUp from './pages/SignUp'
// import SignIn from './pages/SignIn'
// import Contact from './pages/Contact'
// import About from './pages/About'
// import NotFoundPage from './pages/NotFoundPage'
// import MyProfile from './pages/MyProfile'
// import Categories from './components/Categories'
// import Footer from './components/Footer'
// import Navbar from './components/Navbar'
// import Header from './components/Header'
// import LessonsList from './pages/LessonsList'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 mx-4 sm:mx-[10%]">
       
          {/* <LessonsList/> */}
          <CustomNav/>
          <AllRoutes/>
        

        </div>

        {/* <Footer className="mt-auto" /> */}
      </div>
    </>
  )
}

export default App
