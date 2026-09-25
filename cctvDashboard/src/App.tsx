import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-area">
        <Header />
        <main className="main-content">
          <h2>CCTV Dashboard</h2>
          <p>Welcome to the CCTV Dashboard</p>
        </main>
      </div>
    </div>
  );
}

export default App;
