import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./component/home";
import Info from "./component/info";
import Landing from "./component/landing";

function App(){
  return(
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path={'/'}>
              <Landing/>
            </Route>
            <Route exact path={'/pokemon'}>
              <Home/>
            </Route>
            <Route path={'/:id'}>
              <Info/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
