import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
<<<<<<< HEAD
import PoliceLogin from './components/PoliceLogin/LoginForm';
=======
import Case from './Case';
import PoliceLogin from './components/PoliceLogin/PoliceLogin';
>>>>>>> 5bab5127feee7832d26adc3ab1b87c8ce902c4bf
import Home from './Home';
function App() {
  return (
    <div >
          <Router>
            <Routes>

            <Route exact path='/' element={<Home/>}/>
            <Route path='/police' element={<PoliceLogin/>}/>
            <Route path='/case' element={<Case/>} />

            
            </Routes>
          </Router>
    </div>
  );
}

export default App;
