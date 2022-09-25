import React from "react";
import { Carousel,  } from 'antd';

export const HomeSlider = () => {


	return (
		<>
			<Carousel autoplay draggable={true} arrows={true} >
				<div>
					<h3>
						<img
							style={{ width: '100%', height: '500px' }}
							src='https://cdn.shopify.com/s/files/1/0299/9497/5365/products/20220425-155012_360x.jpg?v=1651216080' />
					</h3>
				</div>
				<div>
					<h3>
						<img
							style={{ width: '100%', height: '500px' }}
							src='https://cdn.shopify.com/s/files/1/0299/9497/5365/products/2-HQVfXvG_360x.jpg?v=1655958260' />
					</h3>
				</div>
				<div>
					<h3>
						<img
							style={{ width: '100%', height: '500px' }}
							src='https://cdn.shopify.com/s/files/1/0299/9497/5365/products/5-bwNFBPh_360x.jpg?v=1640018577' />
					</h3>
				</div>
				<div>
					<h3>
						<img
							style={{ width: '100%', height: '500px' }}
							src='https://cdn.shopify.com/s/files/1/0299/9497/5365/products/5_1024x1024_2x_da480a18-5860-4094-8d60-dae7dd428205_360x.webp?v=1659513244' />
					</h3>
				</div>
			</Carousel>
		</>
	);
};
