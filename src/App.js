import './App.css';
import NavBar from './NavBar';
import Home from './homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const title = 'Welcome to React';
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className='container'>
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/create">
            <Create />
          </Route>
          <Route path = "/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
