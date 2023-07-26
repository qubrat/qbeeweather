import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import { LocationProvider } from "./context/LocationContext";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
	return (
		<LocationProvider>
			<WeatherProvider>
				<Navbar />
				<Content />
			</WeatherProvider>
		</LocationProvider>
	);
}

export default App;
