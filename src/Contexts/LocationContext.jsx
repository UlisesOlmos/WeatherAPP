import { useState, createContext, useContext } from "react";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
	const [location, setLocation] = useState("");
    const [queryLocation,setQueryLocation] = useState("")

	return (
		<LocationContext.Provider value={{ location, setLocation ,queryLocation,setQueryLocation}}>
			{children}
		</LocationContext.Provider>
	);
};

const useLocation = () => useContext(LocationContext);

export { LocationProvider, useLocation };
