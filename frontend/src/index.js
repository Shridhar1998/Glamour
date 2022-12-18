import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Store } from "./redux/Store";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

	<BrowserRouter>
		<ChakraProvider>
			<Provider store={Store}>
				<App />
			</Provider>
		</ChakraProvider>
	</BrowserRouter>

);
