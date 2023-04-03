import React from "react";import GoogleMapReact from "google-map-react";
import { useStateContext } from "../ContextProvider";
import { Paper, Typography, Rating } from "@mui/material";
import tick from "../pictures/check.svg";
import useStyles from "./style.js";

function Map() {
	const { coordinates, setCoordinates, setBounds, places, isReady } = useStateContext();
	const isMobile = screen.width <= 600 ? true : false;
	const classes = useStyles();

	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyDVEd5u2jBcLWX9rcOYWzcET9aOR2UkLh0" }}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				onChange={(e) => {
					setCoordinates({ lat: e.center.lat, lng: e.center.lng });
					setBounds({ northEast: e.marginBounds.ne, southWest: e.marginBounds.sw });
				}}
			>
				{places.length &&
					places.map((place, i) => (
						<div
							className={classes.markerContainer}
							lat={Number(place.latitude)}
							lng={Number(place.longitude)}
							key={i}
						>
							{isMobile ? (
								<LocationOnOutlinedIcon color="primary" fontSize="large" />
							) : (
								<Paper elevation={3} className={classes.paper}>
									<Typography className={classes.typography} variant="subtitle2" gutterBottom>
										{place.name}
									</Typography>
									<img className={classes.pointer} src={place.photo ? place.photo.images.large.url : tick} />
									<Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
								</Paper>
							)}
						</div>
					))}
			</GoogleMapReact>
		</div>
	);
}

export default Map;
