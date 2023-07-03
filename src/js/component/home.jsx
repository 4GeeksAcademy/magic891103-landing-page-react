import React from "react";
import Footer from "./Footer";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
//create your first component

const home = () => {
	return (
		<div className="text-center">
			< Navbar/>
			< Jumbotron/>
		<div className="d-flex row justify-content-around">
		<BootstrapCard/>
		</div>
			< Footer/>
		</div>
	);
};
export default home;