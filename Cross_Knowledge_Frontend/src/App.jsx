import { useState } from 'react'
import pic from './assets/kalapath.png'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import MyProfile from './pages/MyProfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <img src={pic} alt="" />
      
      <MyProfile/>
      <NotFoundPage/>
     
      
      

    </div>
  )
}

export default App
