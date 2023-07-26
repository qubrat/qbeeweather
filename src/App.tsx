import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import { LocationProvider } from "./context/LocationContext";
import { WeatherProvider } from "./context/WeatherContext";
import { useState } from "react";
import Spinner from "./components/content/spinner";

function App() {
	const [loading, setLoading] = useState<boolean>(true);

	return (
		<LocationProvider>
			<WeatherProvider setLoading={setLoading}>
				<Navbar />
				{loading ? <Spinner size="large" color="green-900"></Spinner> : <Content />}
			</WeatherProvider>
		</LocationProvider>
	);
}

export default App;
