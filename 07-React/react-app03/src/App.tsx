import { Fragment } from "react/jsx-runtime";
import NavBar from "./ui/NavBar";
import CounterCC from "./ui/CounterCC";
import CounterFC from "./ui/CounterFC";

const App = () => (
  <Fragment>
    <NavBar appTitle="Life Cycle Demo" />
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col">
          <CounterCC />
        </div>
        <div className="col">
          <CounterFC />
        </div>
      </div>
    </div>
  </Fragment>
);

export default App;