import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import React,{useContext,useEffect} from 'react'
import { AuthContext, FirebaseContext } from './Context/Context';
import PoliceLogin from './components/PoliceLogin/LoginForm';
import Admin from './components/Admin/LoginForm';
import Plogin from './Plogin.js'
import Alogin from './Alogin.js'
import Case from './Case.js'
import Form from './Form.js'
import Home from './Home';
import PolicePortal from './components/PolicePortal/PolicePortal';
import SignupForm from './components/PoliceLogin/SignupForm'

function App() {
  // const {firebase} = useContext(FirebaseContext)
  // const {setUser} = useContext(AuthContext);
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user)=>{
  //     setUser(user);
  //   })
  // })
  return (
    
    <div >
          <Router>
            <Routes>

            <Route exact path='/' element={<Home/>}/>
            <Route path='/police' element={<PolicePortal/>}/> 
            {/* <Route path='/police/login' element={<Plogin/>}/> */}
            <Route path='/signup' element={<SignupForm/>}/> 
             
            
            <Route path='/admin' element={<Alogin/>}/>
            <Route path='/case'  element={<Case/>}/>
            <Route path= '/form' element={<Form/>}/>
            </Routes>
            
          </Router>
    </div>
  );
}

export default App;
