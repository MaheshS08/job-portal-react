import "./App.css";
import Main from "./components/Main";
import Quote from "./components/Quote";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
function App() {
  return (
    <div className="App">   
      <Navbar />
      <Main />
     <Category/>
     <Quote/>
    </div>
  );
}

export default App;
