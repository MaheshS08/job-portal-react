import "./App.css";
import Main from "./components/Main";

import Navbar from "./components/Navbar";
import Category from "./components/Category";
function App() {
  return (
    <div className="App">   
      <Navbar />
      <Main />
     <Category/>
    </div>
  );
}

export default App;
