import { Fragment } from "react/jsx-runtime";
import FriendsList from "./ui/FriendsList";
import Header from "./ui/Header";

const App = () => (
  <Fragment>
    <Header appTitle="React-Ts SPA 1.0" />
    <FriendsList />
  </Fragment>
);

export default App;