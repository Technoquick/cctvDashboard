import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import StatCard from "./component/StatCard";
import { cameraStatus } from "./Data/cameraStatus";
import { cameraActivity } from "./Data/cameraActivity";


function App() {
  const totalCameras = 248;
  const onlineCamera = 231;

  const onlinepercentage = (onlineCamera / totalCameras) * 100;
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
           { /* stat card    */}
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

            {/* camera status */}
          <section className="camera-status">
            <h2>Camera Status</h2>
             
            <div className="status-list">
              {cameraStatus.map((status) => (
                <div className="status-item" key={status.name}>
                  <span>
                    {status.icon} {status.name}
                  </span>

                  <strong>{status.count}</strong>
                </div>
              ))}
            </div>

            <div className="camera-progress">
              <div progress-header>
                <span>Online Camera</span>

                <strong>{onlinepercentage.toFixed(1)}%</strong>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${onlinepercentage}%` }}
                ></div>
              </div>
            </div>
          </section>

          <section className="camera-activity">

            <h2>Recent Camera Activity</h2>
            <div className="Activity-list">
              {
                cameraActivity.map((actity)=>(
                  <div className="activity-item" key={actity.camera}>
                    <span> {actity.camera} </span>
                    <span> {actity.site} </span>
                    <span className="`event-badge ${activity.type}`"> {actity.event} </span>
                    <span> {actity.time} </span>
                  </div>
                ))
              }
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
