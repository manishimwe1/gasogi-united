import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
	ArrowLeftCircle,
	ArrowRightCircle,
} from "lucide-react";

const ThisWeekFixtures = () => {
	const CardArray = [1, 2, 3, 4, 5];
	return (
		<div className='mt-8 w-full bg-[#1a1a1a]  text-white'>
			<div className='py-10 px-5  flex flex-col'>
				<div className='flex justify-between'>
					<div>
						<hr className=' group-hover:w-28 group-hover:transition-transform duration-500 group-hover:ease-in delay-500 w-20 border border-orange-500' />
						<h1 className='text-5xl leading-10 tracking-wider font-bold font-sans uppercase '>
							this week at gasogi
						</h1>
					</div>
					<div className='flex gap-3 mr-20'>
						<ArrowLeftCircle className='h-8 w-8 text-muted-foreground' />
						<ArrowRightCircle className='h-8 w-8' />
					</div>
				</div>
				<div className='grid grid-cols-2 mt-6 md:grid-cols-3 lg:grid-cols-5 gap-[7rem] py-2 overflow-x-hidden'>
					{CardArray.map((arr) => (
						<div
							key={arr}
							className='bg-white rounded-md py-2 border-l-8 border-orange-500 w-[300px] flex'>
							<div className='flex flex-col px-2'>
								<p className='text-[12px] text-black/65 font-semibold'>
									Tomorrow
								</p>
								<span className='text-[10px] text-muted-foreground'>
									Rwandan premier league
								</span>
								<div className='flex gap-2 items-center '>
									<Image
										src={"/logo.png"}
										alt='home_team'
										width={40}
										height={40}
										className='object-cover object-center rounded-full'
									/>
									<p className='text-[12px] text-muted-foreground font-semibold'>
										Gasogi U18
									</p>
								</div>
								<div className='flex gap-2 items-center'>
									<Image
										src={"/logo.png"}
										alt='home_team'
										width={40}
										height={40}
										className='object-contain object-center rounded-full'
									/>
									<p className='text-[12px] text-muted-foreground font-semibold'>
										Apr U18
									</p>
								</div>
							</div>

							<div className='border-l ml-4 px-2 flex flex-col'>
								<p className='text-[11px] text-black/65 font-semibold'>
									Kick Off
								</p>
								<span className='text-[10px] text-muted-foreground'>
									Pele stadium
								</span>
								<Button
									className='uppercase w-[100px] rounded-full mt-5 text-black/60 !text-[10px] font-semibold'
									variant={"outline"}>
									view Fixtures
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ThisWeekFixtures;
