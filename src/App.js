import About from "./About";
import Request from "./Request";
import "./App.css";
import Banner from "./Banner";
import Download from "./Download";
import Featured from "./Featured";
import Grocery from "./Grocery";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Grocery />
      <hr />
      <Featured />
      <About />
      <Download />
      <Request />
      <Footer />
    </div>
  );
}

export default App;
