import React from 'react'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import MeasurementConverter from './pages/MeasurementConverter'

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
            <Route path='/MeasurementConverter' component={MeasurementConverter} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
