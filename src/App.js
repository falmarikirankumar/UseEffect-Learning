import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import RouterFile from "./Components/RouterFile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <RouterFile />
      </div>
    </BrowserRouter>
  );
}

export default App;
