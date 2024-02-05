import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
	ArrowLeftCircle,
	ArrowRightCircle,
} from "lucide-react";
import FixturesCard from "./FixturesCard";
import { fixtures } from "@/constants";
import { fixture } from "@/typing";

const ThisWeekFixtures = () => {
	return (
		<div className='mt-8 w-full bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a] to-[#1a1a1a]/90  text-white '>
			<div className='py-10 px-5  flex flex-col'>
				<div className='flex justify-between items-center'>
					<div>
						<hr className=' group-hover:w-28 group-hover:transition-transform duration-500 group-hover:ease-in delay-500 w-20 border border-orange-500' />
						<h1 className='lg:text-5xl text-lg leading-10 tracking-wider font-bold font-sans uppercase '>
							this week at gasogi
						</h1>
					</div>
					<div className='flex gap-3 mr-5 lg:mr-20  justify-between'>
						<ArrowLeftCircle className='lg:h-8 w-5 lg:w-8 h-5 text-muted-foreground hover:-translate-x-1 cursor-pointer hover:transition-transform delay-200 ease-in duration-200' />
						<ArrowRightCircle className='lg:h-8 w-5 lg:w-8 h-5 hover:translate-x-1 cursor-pointer hover:transition-transform delay-200 ease-in duration-200' />
					</div>
				</div>
				<div className='flex  gap-4 py-2  overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-950  cursor-pointer '>
					{fixtures.map((fixture: fixture) => (
						<div
							key={fixture.AwayTeam}
							className='mt-4 h-32 snap-x snap-mandatory  w-full md:w-[300px] flex flex-shrink-0 hover:-translate-y-2 hover:transition-transform duration-300 ease-in-out delay-150 hover:shadow-sm  rounded-md hover:shadow-slate-400'>
							<FixturesCard
								fixture={fixture}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ThisWeekFixtures;
