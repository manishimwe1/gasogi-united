import Image from "next/image";
import React from "react";
import DescriptionCard from "./DescriptionCard";
type props = {
	matcHighLight: {
		imgSrc: string;
		title: string;
		href: string;
		category: string;
	};
};
const MatchHighLights = ({
	matcHighLight: { imgSrc, title, href, category },
}: props) => {
	return (
		<div className=' group relative rounded-md w-full h-[450px] transition-all ease-out hover:delay-500  z-50  hover:scale-105 duration-1000  shadow-sm cursor-pointer'>
			<Image
				src={imgSrc}
				fill
				alt={title}
				className='object-cover object-center rounded-md'
			/>
			<div className='absolute inset-0'>
				<DescriptionCard
					title={title}
					category={category}
					href={href}
					sm={true}
				/>
			</div>
		</div>
	);
};

export default MatchHighLights;
