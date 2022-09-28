import React from "react";
import { Annoucements } from "./Annoucements";
import KeebTypingProducts from "./Category Page/KeebTypingProducts";
import { Footer } from "./Footer";
import { HomeSlider } from "./HomeSlider";
import UniqueStyling from "./UniqueStyling";


export const HomePage = () => {
	return (
		<div >
			<HomeSlider />
			<Annoucements />
			<KeebTypingProducts />
			<UniqueStyling />
			<Footer />
		</div>
	);
};
