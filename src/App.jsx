
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AuthProvider } from './context/authProvider/AuthContext'



//Pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'


//Components
import Navbar from './components/navbar/Navbar'
import Protected from './components/protected/Protected'
import Footer from './components/footer/Footer'



function App() {
 

  return (
  
    <div className="App">
      <AuthProvider>
        
        <Router>
          <Navbar/>
            <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path='/admin' element = {<Protected><Admin/></Protected>}/>
            </Routes>
            <Footer/>
        </Router>
      </AuthProvider>



    </div>
  )
}

export default App
