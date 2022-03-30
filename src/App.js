import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import PoliceLogin from './components/PoliceLogin/LoginForm';
import Home from './Home';
function App() {
  return (
    <div >
          <Router>
            <Routes>

            <Route exact path='/' element={<Home/>}/>
            <Route path='/police' element={<PoliceLogin/>}/>

            
            </Routes>
          </Router>
    </div>
  );
}

export default App;
