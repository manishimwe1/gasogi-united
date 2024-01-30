import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { homeTemName } from "@/constants";

type Props = {
	fixture: {
		homeTeam: string;
		AwayTeam: string;
	};
};

const FixturesCard = ({
	fixture: { homeTeam, AwayTeam },
}: Props) => {
	console.log();

	return (
		<div
			// key={arr}
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
					<p
						className={cn(
							"text-[12px] relative text-muted-foreground font-semibold whitespace-nowrap rounded-full py-1",
							homeTeam === homeTemName
								? "bg-orange-500/50 px-2"
								: "bg-black/50 text-slate-50 w-full px-2",
						)}>
						{homeTeam}
						{homeTeam === homeTemName && (
							<span className=' absolute top-0 right-1 animate-ping delay-1000 bg-green-600 h-2 w-2 rounded-full' />
						)}
					</p>
				</div>
				<div className='flex gap-2 items-center'>
					<Image
						src={"/logo.png"}
						alt='away_team'
						width={40}
						height={40}
						className='object-contain object-center rounded-full'
					/>
					<p
						className={cn(
							"text-[12px] text-muted-foreground relative font-semibold whitespace-nowrap rounded-full py-1",
							AwayTeam === homeTemName
								? "bg-orange-500/50 px-2"
								: "bg-black/50 text-slate-100 w-full px-2 ",
						)}>
						{AwayTeam}
						{AwayTeam === homeTemName && (
							<span className=' absolute top-0 right-1 animate-ping delay-1000 bg-green-600 h-2 w-2 rounded-full' />
						)}
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
	);
};

export default FixturesCard;
