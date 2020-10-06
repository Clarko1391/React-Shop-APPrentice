import React from 'react'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import MeasurementConverter from './pages/MeasurementConverter'
import FractionalCalculator from './pages/FractionalCalculator'
import ReferenceManual from './pages/ReferenceManual'

// CSS
const Body = styled.div`
  text-align: center;
  min-height: 100vh;
  background-image: linear-gradient(to bottom,#383838, #383838, #6b2b2f, #6b2b2f);
  overflow-x: hidden;
`

function App() {
  return (
    <Body>
      <Router>
          <Navbar />
          <Switch>
              <Route path='/' exact component={MeasurementConverter} />
              <Route path='/MeasurementConverter' component={MeasurementConverter} />
              <Route path='/FractionalCalculator' component={FractionalCalculator} />
              <Route path='/ReferenceManual' component={ReferenceManual} />
          </Switch>
          <Footer />
      </Router>
    </Body>
  );
}

export default App;
