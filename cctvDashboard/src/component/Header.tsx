function Header() {
    return ( 
        <header className="header">

          <div className="search-box">
            <span>🔍</span>
            <input 
               type="text"
               placeholder="Search cameras, sites, ticket"

             />
          </div>

          <div className="header-right">
            <button className="notification">🔔</button>
 
             <div className="profile">
                <div className="profile-avatar">
                    AK
                 </div>
             

             <div className="profile-info">
                <strong>Ankit Kumar</strong>
                <span>Administrator</span>
             </div>
            </div>
          </div>

        </header>
     );
}

export default Header