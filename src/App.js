import "./App.css";
import Home from "./Pages/Home";
import Acadmics from "./components/Academics/Acadmics";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus/Aboutus";
import Student from './components/StudentCorner/Student'
import Reserach from "./components/Research/Reserach";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      
     <Header />
      <Home />
      <Acadmics/>
       <Aboutus />
      <Student />
      <Reserach />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
