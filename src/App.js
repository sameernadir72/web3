import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Left_img from "./components/Left_img";

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="row mx-0 my-3">
          <div className="col-md-6">
            <Left_img img={logo}/>
          </div>
          <div className="col-md-6">
            <Counter />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
