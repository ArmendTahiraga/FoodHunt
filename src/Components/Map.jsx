import React from "react";
import GoogleMapReact from "google-map-react";

function Map() {
	const coordinates = { lat: 42.0693, lng: 19.5033 };

	return (
		<div className="map-container">
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyDVEd5u2jBcLWX9rcOYWzcET9aOR2UkLh0" }}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={""}
				onChange={""}
				onChildClick={""}
			></GoogleMapReact>
		</div>
	);
}

export default Map;
