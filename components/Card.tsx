import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export function CardList() {
	const card = [1, 2, 3, 4];
	return (
		<div className='grid grid-cols-1  sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 gap-2 lg:gap-4 w-full '>
			{card.map((_, i) => (
				<div className='  h-[350px]  w-[350px] sm:w-full mx-auto overflow-hidden   '>
					<Card
						key={i}
						className='w-full   px-0 hover:shadow-md hover:shadow-orange-500 transition-all delay-200 duration-200 ease-in-out  cursor-pointer '>
						<CardHeader className='w-full h-32'>
							<div className=' relative  overflow-hidden  w-full h-40 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1   duration-300'>
								<Image
									src={"/image.jpeg"}
									alt='cardImage'
									width={1000}
									height={100}
									className=' object-contain object-center   rounded-t-md saturate-150'
								/>
								<div className=' absolute bottom-0 bg-gradient-to-b from-orange-500/10 via-orange-500/30 to-orange-500/50 h-3 w-full' />
							</div>
						</CardHeader>
						<CardContent className=' px-2 mt-2'>
							<h2 className='font-semibold '>
								Gasogi United yatsinze Rayon
								Sports iyitrusha cyane
							</h2>
						</CardContent>
						<CardFooter className=''>
							<p className='text-xs text-slate-700 font-normal leading-5 text-justify'>
								Mu mikino y’igikombe
								cy’amahoro Kuri uyu wa kane
								18/01/2024. Gasogi United
								irahura na Muhazi FC kuri
								Kigali Pele Stadium i saa
								Cyenda z’umugoroba (15h00’)
								KWINJIRA NI UBUNTUU!!!!🎊
								Muze dushyigikire Ikipe
								yacu!!{" "}
								<span className='text-orange-600 mt-2 hover:underline hover:underline-offset-4 cursor-pointer'>
									#Ibyishimoniyontego
								</span>
							</p>
						</CardFooter>
					</Card>
				</div>
			))}
		</div>
	);
}
