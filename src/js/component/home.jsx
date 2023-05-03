import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Header from "./header";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Header/>
		</div>
	);
};

export default Home;
