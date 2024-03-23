
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AuthProvider } from './context/authProvider/AuthContext'



//Pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'


//Components
import Navbar from './components/navbar/Navbar'




function App() {
 

  return (
  
    <div className="App">
      <AuthProvider>
        
        <Router>
          <Navbar/>
            <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/login' element= {<Login/>}/>
            </Routes>
        </Router>
      </AuthProvider>



    </div>
  )
}

export default App
