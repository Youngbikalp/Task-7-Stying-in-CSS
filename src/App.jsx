import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MainContent from "./components/mainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
