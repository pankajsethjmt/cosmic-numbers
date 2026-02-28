import { useState } from "react";
import Header from "./components/header/Header";
import MainForm from "./components/mainForm/MainForm";
import Result from "./components/result/Result";
// import Starfield from "./components/starfield/Starfield";
import CosmicScene from "./components/starfield/CosmicScene";
// import StarfieldDeep from "./components/starfield/StarfieldDeep";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      
      {/* <Starfield /> */}
      {/* <StarfieldDeep /> */}
      <CosmicScene />
      <Header />
      {!result ? (
        <MainForm onResult={setResult} />
      ) : (
        <Result result={result} onReset={() => setResult(null)} />
      )}
    </div>
  );
}

export default App;
