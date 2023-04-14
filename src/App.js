import "./App.css";
import Main from "./components/Main";
import Quote from "./components/Quote";
import Navbar from "./components/Navbar";
import Jobs from "./components/Jobs";
import Category from "./components/Category";
import Top_Recruiters from "./components/Top_Recruiters";
function App() {
  return (
    <div className="App">   
      <Navbar />
      <Main />
     <Category/>
     <Quote/>
     <Jobs/>
     <Top_Recruiters/>
    </div>
  );
}

export default App;
