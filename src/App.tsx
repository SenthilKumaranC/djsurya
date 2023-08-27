import logo from "./assets/logo.png"
import "./App.css";

function App() {
 
  return (
    <>
      <div className="column">
        <img src={logo} className="logo" alt="Vite logo"  style={{objectFit:"contain"}} />
        <span className="contactme">Contact Me 8903702108</span>
      </div>
    </>
  );
}

export default App;
