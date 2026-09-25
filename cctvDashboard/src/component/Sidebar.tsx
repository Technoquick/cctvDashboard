function Sidebar() {
    return ( 
        <aside className="sidebar">
          <div className="logo">
            🛡️ TechnoSecure
          </div>
          <div className="menu">
            <p className="menu-title">Main</p>
            <a href="#" className="menu-item active">
                Dashboard
            </a>
          </div>

          <div className="menu-section">
            <p className="menu-title">MONITORING</p>
 
            <a href="#" className="menu-item">◉ Cameras</a>
            <a href="#" className="menu-item">◉ Sites</a>
            <a href="#" className="menu-item">◉ NVR/DVR</a>

          </div>

          <div className="menu-section">

            <p className="menu-title">OPERATION</p>

            <a href="#" className="menu-item">🔧 Service Tickets</a>
            <a href="#" className="menu-item">👷 Technicians</a>

          </div>

          <div className="menu-section">
            <p className="menu-title">BUSINESS</p>

            <a href="#" className="menu-item">👥 Customers</a>
            <a href="#" className="menu-item">📦 Inventory</a>

          </div>

          <div className="menu-section">
            <p className="menu-title">ANALYTICS</p>

            <a href="#" className="menu-item">📊 Reports</a>
            
          </div>

          <div className="menu-section">
            <a href="#" className="menu-item">⚙️ Settings</a>
            
          </div>

        </aside>
     );
}

export default Sidebar
