import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Registration/Login/Login';
import Service from './Components/Service/Service';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/appointment"></Route>
          <Route path="/blogs"></Route>
          <Route path="/about"></Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register"></Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
