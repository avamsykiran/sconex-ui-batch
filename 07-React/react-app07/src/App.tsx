
import NavBar from "./ui/NavBar";
import ContactsList from "./ui/ContactsList";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./ui/Home";
import AboutUs from "./ui/AboutUs";

const App = () => (
  <BrowserRouter>
    <NavBar appTitle="Address Book 1.0" />

    <div className="container-fluid p-4">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contacts" element={<ContactsList />} />
      </Routes>

    </div>

  </BrowserRouter>

);

export default App;