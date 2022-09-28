import { Card } from "antd";
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Annoucements } from "./Annoucements";
import { Footer } from "./Footer";
import HomeCategory from "./HomeCategory";
import { HomeSlider } from "./HomeSlider";
import UniqueStyling from "./UniqueStyling";


export const HomePage = () => {

	const data = useContext(ProductContext);
	const title_1 = data.data?.allCategory?.[3];
	const title_2 = data.data?.allCategory?.[4];

	return (
		<div >
			<HomeSlider />
			<Card>
				<Annoucements />
				<HomeCategory title={title_1} />
				<HomeCategory title={title_2} />
				<UniqueStyling />
			</Card>
		</div>
	);
};
