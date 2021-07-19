import Geocode from "react-geocode";

export default function getLocation(latitude, longitude) {
	Geocode.setApiKey("AIzaSyBTw395aL9BSM9QoxzgP3R7jb9Chsk4Xwk");
	Geocode.setLanguage("en");
	Geocode.setLocationType("ROOFTOP");
	Geocode.enableDebug();

	let city, state, res;
	// let country;

	// Get formatted address, city, state, country from latitude & longitude when
	// Geocode.setLocationType("ROOFTOP") enabled
	// the below parser will work for most of the countries
	Geocode.fromLatLng(latitude, longitude).then(
		(response) => {
			// const address = response.results[0].formatted_address;
			for (let i = 0; i < response.results[0].address_components.length; i++) {
				for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
					switch (response.results[0].address_components[i].types[j]) {
						case "locality":
							city = response.results[0].address_components[i].long_name;
							break;
						case "administrative_area_level_1":
							state = response.results[0].address_components[i].long_name;
							break;
						// case "country":
						// 	country = response.results[0].address_components[i].long_name;
						// 	break;
					}
				}
			}
			// console.log(city, state, country);
			// console.log(address);
			res = city + ", " + state;
			console.log("Reverse geocode returned: " + res);
		},

		(error) => {
			console.error(error);
		}
	);

	return res;
}
