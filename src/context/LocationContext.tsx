import React, { createContext, useState } from "react";

interface LocationData {
	lat: number;
	lon: number;
}

interface CityData {
	name: string;
	country: string;
}

interface LocationContextValue extends LocationData, CityData {
	updateLocation: (lat: number, lon: number) => void;
	updateCity: (name: string, country: string) => void;
}

const LocationContext = createContext<LocationContextValue>({
	lat: 52.237049,
	lon: 21.017532,
	updateLocation: () => {},
	name: "Warsaw",
	country: "PL",
	updateCity: () => {},
});

const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [location, setLocation] = useState<LocationData>({
		lat: 52.237049,
		lon: 21.017532,
	});
	const [city, setCity] = useState<CityData>({
		name: "Warszawa",
		country: "PL",
	});

	const updateLocation = (lat: number, lon: number) => {
		setLocation({ lat, lon });
	};

	const updateCity = (name: string, country: string) => {
		setCity({ name, country });
	};

	return <LocationContext.Provider value={{ ...location, updateLocation, ...city, updateCity }}>{children}</LocationContext.Provider>;
};

export { LocationContext, LocationProvider };
