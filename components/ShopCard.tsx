import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const ShopCard = () => {
	return (
		<div className='w-1/2 relative shadow-md shadow-orange-300/5 bg-gradient-to-tr from-black/90 via-black to-[#1a331be6] pb-4 rounded-md '>
			<div className='grid grid-cols-3 gap-5 p-10 relative'>
				<div className=' h-[200px] -mt-10 relative '>
					<Image
						src={"/image.jpeg"}
						alt='cardImage'
						fill
						className='object-cover object-center mt-10 cursor-pointer group-hover:transition-all ease-out group-hover:delay-100  group-hover:scale-105 duration-500 '
					/>
				</div>
				<div className=' h-[300px] -mt-4 relative '>
					<Image
						src={"/image.jpeg"}
						alt='cardImage'
						fill
						className='object-cover object-center cursor-pointer group-hover:transition-all ease-out group-hover:delay-100  group-hover:scale-105 duration-500 '
					/>
				</div>
				<div className=' h-[232px] mt-20  relative '>
					<Image
						src={"/image.jpeg"}
						alt='cardImage'
						fill
						className='object-cover object-center cursor-pointer group-hover:transition-all ease-out group-hover:delay-100  group-hover:scale-105 duration-500 '
					/>
				</div>
				<div className='absolute bottom-0 inset-x-0 z-50 bg-gradient-to-t from-black/70 via-black/40 to-transparent h-full w-full ' />
				<div className='absolute bottom-0 p-4 ml-5 text-white z-50'>
					<div className='flex gap-2 items-center z-50'>
						<Image
							src={"/logo.png"}
							width={60}
							height={60}
							alt='logo'
						/>
						<h3 className='text-sm font-sans font-bold text-muted-foreground '>
							<span className='text-orange-500 saturate-200'>
								GASOGI
							</span>
							<br />
							DIRECT
						</h3>
					</div>
					<div className='flex flex-col gap-3 z-50'>
						<h1 className='font-bold tracking-widest text-lg'>
							ATTACK 2024
						</h1>
						<Button
							className='text-black'
							variant={"outline"}>
							SHOP HERE
						</Button>
					</div>
				</div>
				<div className='absolute top-5 right-2'>
					<div className=' px-4 flex items-center gap-3 '>
						<Image
							src={"/brand.png"}
							width={60}
							height={60}
							className='object-cover object-center'
							alt='brand'
						/>
						<hr className='w-px h-8  bg-slate-100' />
						<Image
							src={"/logo.png"}
							width={70}
							height={60}
							className='object-contain object-center'
							alt='brand'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopCard;
