import Loading from "./components/Loading/Loading";
import ToDoListSaga from "./ToDoListReduxSaga/ToDoListSaga";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/footer" component={Footer} />
        <Route exact path="/todolistsaga" component={ToDoListSaga} />
        <Route exact path="/" component={ToDoListSaga} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
