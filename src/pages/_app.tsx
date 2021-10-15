import React from "react";
import { AppProps } from "next/app";
import "styles/style.scss";
import "styles/index.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return <Component {...pageProps} />;
};

export default MyApp;
