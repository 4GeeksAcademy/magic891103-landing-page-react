import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./Footer";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";


const Home = () => {
	return (
		<div className="text-center">
			< Navbar/>
			< Jumbotron/>
		<div className="d-flex row justify-content-around">
		<Card/>
		</div>
			< Footer/>
		</div>
	);
};
export default Home;