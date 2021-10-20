import React from "react";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "styles/style.scss";
import "styles/index.scss";	
import Frontlayout from "layouts/Frontlayout";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<Frontlayout>
			<Component {...pageProps} />
		</Frontlayout>
	); 
};

export default MyApp;
