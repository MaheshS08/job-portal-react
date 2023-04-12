import "./App.css";
import Category from "./components/Category";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Main/>
     <Category/>
    </div>
  );
}

export default App;
