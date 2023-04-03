import React from "react";
import GoogleMapReact from "google-map-react";
import { useStateContext } from "../ContextProvider";
import tick from "../pictures/check.svg";

function Map() {
	const { coordinates, setCoordinates, setBounds, places, isReady } = useStateContext();
	const isMobile = screen.width <= 600 ? true : false;

	return (
		<div className="map-container">
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyDVEd5u2jBcLWX9rcOYWzcET9aOR2UkLh0" }}
				defaultCenter={{ lat: 42.0693, lng: 19.5033 }}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				onChange={(event) => {
					setCoordinates({ lat: event.center.lat, lng: event.center.lng });
					setBounds({ northEast: event.marginBounds.ne, southWest: event.marginBounds.sw });
				}}
			>
				{isReady &&
					places.map((place, index) => {
						<div
							lat={Number(place.latitude)}
							lng={Number(place.longitude)}
							key={index}
							className="restaurant-cards-container"
						>
							{isMobile ? (
								<img src={tick} alt={"place.nam"} />
							) : (
								<div className="restaurant-card">
									<h2 className="restaurant-name">{place.name}</h2>
									{place.photo ? (
										<img src={place.photo.images.large.url} alt={place.name} />
									) : (
										<h3>There is no photo</h3>
									)}
									<div className="restaurant-rating">
										<p>{Number(place.rating)}</p>
									</div>
								</div>
							)}
						</div>;
					})}
			</GoogleMapReact>
		</div>
	);
}

export default Map;
