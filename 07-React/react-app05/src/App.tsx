import { Fragment } from "react/jsx-runtime";
import NavBar from "./ui/NavBar";
import ContactsList from "./ui/ContactsList";

const App =() => (
  <Fragment>
    <NavBar appTitle="Address Book 1.0" />
    <div className="container-fluid p-4">
      <ContactsList />
    </div>
  </Fragment>
);

export default App;