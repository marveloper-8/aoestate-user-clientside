import React, {useEffect, createContext, useReducer, useContext} from 'react';
// import {Notifications} from 'react-push-notification'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from 'react-router-dom'

// import './app.css'

import Content from './Content'
import About from './About'
import HowWeWork from './HowWeWork'
import Estates from './Estates'
import Properties from './Properties'
import CustomerCare from './CustomerCare'
import PropertiesDetails from './PropertiesDetails'
import PropertiesDetailsGeneral from './PropertiesDetailsGeneral'
import EventDetails from './EventDetails'
import DevelopersHub from './DevelopersHub'
import BrokersDashboard from './BrokersDashboard'
import BrokersSignIn from './BrokersSignIn'
import BrokersSignUp from './BrokersSignUp'
import {reducer, initialState} from './../../reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type: "USER", payload: user})
    } else{
      history.push('/')
    }
  }, [history, dispatch])

  return(
    <Switch>
          <Route exact path='/' component={Content} />
          <Route path='/about' component={About} />
          <Route path='/how-we-work' component={HowWeWork} />
          <Route path='/estates' component={Estates} />
          <Route path='/properties' component={Properties} />
          <Route path='/customer-care' component={CustomerCare} />
          <Route path='/properties-details/:propertyId' component={PropertiesDetails} />
          <Route path='/properties-details-general/:generalPropertyId' component={PropertiesDetailsGeneral} />
          <Route path='/event-details/:eventId' component={EventDetails} />
          <Route path='/developers-hub' component={DevelopersHub} />
          <Route path='/brokers' component={BrokersDashboard} />
          <Route path='/brokers-signin' component={BrokersSignIn} />
          <Route path='/brokers-signup' component={BrokersSignUp} />
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <UserContext.Provider value={{state, dispatch}}>
        <Router>
          <Routing />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
