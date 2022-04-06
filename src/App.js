import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

import PoliceLogin from './components/PoliceLogin/LoginForm';
import Admin from './components/Admin/LoginForm';
import Plogin from './Plogin.js'
import Alogin from './Alogin.js'
import Case from './Case.js'
import Form from './Form.js'
import Home from './Home';
function App() {
  return (
    <div >
          <Router>
            <Routes>

            <Route exact path='/' element={<Home/>}/>
            <Route path='/police' element={<Plogin/>}/> 
            <Route path='/admin' element={<Alogin/>}/>
            <Route path='/case'  element={<Case/>}/>
            <Route path= '/form' element={<Form/>}/>
             
            </Routes>
            }
          </Router>
    </div>
  );
}

export default App;
