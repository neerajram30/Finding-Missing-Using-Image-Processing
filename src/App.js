import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

import PoliceLogin from './components/PoliceLogin/LoginForm';
import Login from './Plogin.js'
import ALogin from './Alogin.js'
import Case from './Case.js'
import Home from './Home';
function App() {
  return (
    <div >
          <Router>
            <Routes>

            <Route exact path='/' element={<Home/>}/>
            <Route path='/police' element={<Login/>}/>
            <Route path='/admin' element={<ALogin/>}/>
            <Route path='/case'  element={<Case/>}/>

            
            </Routes>
          </Router>
    </div>
  );
}

export default App;
