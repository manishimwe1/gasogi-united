import Image from "next/image";
import React from "react";

const Banner = () => {
	return (
		<>
			<div className='bg-gradient-to-tr z-20 from-slate-500/50 via-transparent rounded-md to-black/50 w-full absolute inset-0' />
			<div className='bg-gradient-to-b z-20  from-slate-50 via-transparent rounded-full -mt-36 to-black/0 w-[300px] mx-auto absolute inset-0' />
			<Image
				className='w-full z-0 object-contain  bg-orange-600  h-full object-center rounded-md'
				src={"/Tezo.png"}
				fill
				alt='banner'
			/>
		</>
	);
};

export default Banner;
