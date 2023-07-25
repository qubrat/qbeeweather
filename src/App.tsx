import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import { LocationProvider } from "./context/LocationContext";

function App() {
	return (
		<LocationProvider>
			<Navbar />
			<Content />
		</LocationProvider>
	);
}

export default App;
