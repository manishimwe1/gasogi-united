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
				<div className='flex justify-between'>
					<div>
						<hr className=' group-hover:w-28 group-hover:transition-transform duration-500 group-hover:ease-in delay-500 w-20 border border-orange-500' />
						<h1 className='text-5xl leading-10 tracking-wider font-bold font-sans uppercase '>
							this week at gasogi
						</h1>
					</div>
					<div className='flex gap-3 mr-20'>
						<ArrowLeftCircle className='h-8 w-8 text-muted-foreground hover:-translate-x-1 cursor-pointer hover:transition-transform delay-200 ease-in duration-200' />
						<ArrowRightCircle className='h-8 w-8 hover:translate-x-1 cursor-pointer hover:transition-transform delay-200 ease-in duration-200' />
					</div>
				</div>
				<div className='flex gap-2 lg:gap-4 py-2  overflow-x-hidden cursor-pointer '>
					{fixtures.map((fixture: fixture) => (
						<div
							key={fixture.AwayTeam}
							className='mt-4 h-32 w-[300px] flex flex-shrink-0 hover:-translate-y-2 hover:transition-transform duration-300 ease-in-out delay-150 hover:shadow-sm rounded-md hover:shadow-slate-400'>
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
