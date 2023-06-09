import React from "react";
import GoogleMapReact from "google-map-react";
import { useStateContext } from "../ContextProvider";
import greyStar from "../pictures/greyStar.png";
import yellowStar from "../pictures/yellowStar.png";

function Map() {
	const { coordinates, places } = useStateContext();

	const placesArray =
		places &&
		places.map((place, index) =>
			place.photo && Number(place.rating) >= 1 ? (
				<div
					lat={Number(place.latitude)}
					lng={Number(place.longitude)}
					key={index}
					className="restaurant-cards-container"
				>
					<div className="restaurant-card">
						<h2 className="restaurant-name">{place.name}</h2>
						<img src={place.photo.images.large.url} alt={place.name} />
						<div className="restaurant-rating">{checkRating(Math.ceil(Number(place.rating)))}</div>
					</div>
				</div>
			) : (
				""
			)
		);

	function checkRating(rating) {
		let starArr = [];
		if (rating === 1) {
			starArr = [yellowStar, greyStar, greyStar, greyStar, greyStar];
		} else if (rating === 2) {
			starArr = [yellowStar, yellowStar, greyStar, greyStar, greyStar];
		} else if (rating === 3) {
			starArr = [yellowStar, yellowStar, yellowStar, greyStar, greyStar];
		} else if (rating === 4) {
			starArr = [yellowStar, yellowStar, yellowStar, yellowStar, greyStar];
		} else if (rating === 5) {
			starArr = [yellowStar, yellowStar, yellowStar, yellowStar, yellowStar];
		}
		starArr = starArr.map((e, i) => <img src={e} alt="" key={i} className="star" />);

		return starArr;
	}

	return (
		<div className="map-container">
			<GoogleMapReact
				bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
				defaultCenter={{ lat: 42.0693, lng: 19.5033 }}
				center={coordinates}
				defaultZoom={16}
				margin={[50, 50, 50, 50]}
			>
				{placesArray}
			</GoogleMapReact>
		</div>
	);
}

export default Map;
