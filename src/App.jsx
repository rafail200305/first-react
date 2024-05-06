import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/layouts/Header";
import Footer from "./assets/layouts/Footer";
import Main from "./components/Main";
import { students } from "./assets/Data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Main students ={students} />
        <Footer />
      </div>
    </>
  );
}

export default App;
