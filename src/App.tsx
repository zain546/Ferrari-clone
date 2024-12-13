import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar";
import "./App.css";

let navItems = ["racing", "Sports car", "collections", "about us", "search"];
const App = () => {
  return (
    <>
      <Navbar items={navItems} />
      <Hero />
    </>
  );
};

export default App;
