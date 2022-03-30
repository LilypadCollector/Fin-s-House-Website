import map from "./../images/map.png";

const Location = () => {
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
    };
    
    return(
        <div className="page" id="location-page">
            <h1 className="primary-font" id="north-natomas">NORTH NATOMAS</h1>
            <div className="secondary-font address">2580 Arena Blvd Ste 140</div>
            <div className="secondary-font address">Sacramento, CA 95834</div>
            <img src={map} id="map"/>
        </div>
    )
}

export default Location