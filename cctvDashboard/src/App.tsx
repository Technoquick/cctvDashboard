import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import StatCard from "./component/StatCard";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-area">
        <Header />

        <main className="main-content">
          <div className="page-heading">
            <div>
          <h2>CCTV Dashboard</h2>
          <p>Monitor your security infrastructure</p>
          </div>
          </div>

          <section className="stats-grid">

            <StatCard 
            title="Total Camera"
            value="248"
            description="+12th this month"
            icon="📹"
            />
            <StatCard 
            title="Online Camera"
            value="231"
            description="93.1% operational"
            icon="🟢"
            />
            <StatCard 
            title="Offline Camera"
            value="17"
            description="6.9% required attention"
            icon="🔴"
            />
            <StatCard 
            title="Open Ticket"
            value="12"
            description="4 high priority"
            icon="🎫"
            />

          </section>

        </main>

      </div>

    </div>

    
  );
}

export default App;
