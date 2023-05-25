import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="container">
        <div className="topBar"></div>
        <div className="content"></div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;
