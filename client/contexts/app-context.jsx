import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<AppContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
