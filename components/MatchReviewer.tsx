"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { HeroImages } from "@/constants";
import { Button, buttonVariants } from "./ui/button";

const MatchReviewer = () => {
	return (
		<div className='border-2 h-[600px] w-full'>
			<div className='w-full h-[600px] relative'>
				<Carousel
					showThumbs={false}
					autoPlay
					infiniteLoop
					interval={10000}
					showArrows={false}
					showStatus={false}
					className='transition-all duration-500 delay-200 ease-in-out  w-full'>
					{HeroImages.map((image) => (
						<div
							key={image.alt}
							className='w-full h-[600px] relative '>
							<Image
								src={image.src}
								width={1000}
								height={500}
								className='object-contain  object-center'
								alt={image.alt}
							/>
						</div>
					))}
				</Carousel>
				<div className='bg-gradient-to-t from-black/70 via-black/60 to-black/50 h-full absolute w-full z-20  inset-0'>
					<div className='flex flex-col mt-20 justify-center items-center h-full z-50'>
						<p
							className={`${buttonVariants({
								variant: "outline",
							})} text-xl cursor-pointer  hover:text-slate-300 hover:bg-slate-600 bg-slate-700 border-4 border-slate-900 text-white !font-semibold`}>
							FT
						</p>
						<div className=' flex gap-2 items-center'>
							<div className='flex items-center'>
								<p className='font-bold text-4xl tracking-wider text-white '>
									Rayon sport
								</p>
								<Image
									src={"/logo.png"}
									width={200}
									height={200}
									alt='awayTeam'
								/>
							</div>
							<div className='flex gap-4 text-white'>
								<p className='text-6xl font-bold leading-10'>
									2
								</p>
								<span className='text-6xl font-bold leading-10'>
									-
								</span>
								<p className='text-6xl font-bold leading-10'>
									4
								</p>
							</div>
							<div className='flex items-center'>
								<Image
									src={"/logo.png"}
									width={200}
									height={200}
									alt='awayTeam'
								/>
								<p className='font-bold text-4xl tracking-wider text-white '>
									Gasogi united
								</p>
							</div>
						</div>
						<div className=''>
							<Button className='saturate-200 font-bold text-lg hover:saturate-100 !py-7 !px-10'>
								Match Review
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MatchReviewer;
