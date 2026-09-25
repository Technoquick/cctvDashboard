type StatCardProps={
     title: string
     value: string
     description: string
     icon: string
}
function StatCard ({ title, value, description, icon} :StatCardProps) {
    return ( 
        <div className="stat-card">

            <div className=" stat-card-top">
                <span className="stat-title">{title}</span>
                <span className="stat-icon">{icon}</span>
                </div>
                <span className="stat-value">{value}</span>
                <span className="stat-description">{description}</span>
            </div>
        
     );
}

export default StatCard;

