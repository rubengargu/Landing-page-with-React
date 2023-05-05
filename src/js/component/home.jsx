import React from "react";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Header from "./header";

//create your first component
const Home = () => {
	return (
		<div >
			<Navbar/>
			<div className=" m-auto w-75 overflow-auto">	
			<Header/>
			
			<div className="row" id="card-row">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
				</div>
		<Footer/>
		</div>
	);
};



export default Home;
