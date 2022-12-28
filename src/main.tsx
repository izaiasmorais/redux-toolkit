import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</Provider>
	</React.StrictMode>
);
