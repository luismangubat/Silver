import React from 'react';
import Navigation from './components/navigation.js'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom' 
import PageRenderer from './page-renderer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>

          {/* Allows future pagess to render by finding the corrensponding page name */}
          <Route path= '/:page' component = {PageRenderer}/>
          <Route path = '/' render = {() => <Redirect to = '/home'/> } />
          {/* if page is not return an error page */}
          <Route component= {() => 404}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
