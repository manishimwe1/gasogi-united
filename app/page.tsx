import { CardList } from "@/components/Card";
import { Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<main className='max-w-6xl mx-auto shadow-md rounded-2xl mt-10 shadow-orange-500/60 px-8 md:p-6 flex flex-col'>
			<div className='flex justify-between items-center pb-3'>
				<div>
					<hr className=' w-20 border border-orange-500' />
					<h3 className='font-extrabold text-slate-900 text-xl pt-1'>
						TODAY ON GASOGI - UNITED.COM
					</h3>
				</div>
				<div>
					{/* TODO:animate hover line */}
					<p className='font-medium text-[10px] text-orange-400 decoration-2 underline-offset-2 transition-transform duration-400 ease-in hover:underline  decoration-orange-500 cursor-pointer'>
						FIND MORE STORIES
					</p>
				</div>
			</div>
			<div className='flex flex-col  md:flex-row gap-4 md:gap-8'>
				<div className='border relative md:w-[50%] h-48 lg:h-[303px]  cursor-pointer hover:scale-105 transition-all rounded-md ease-in-out duration-150 '>
					<Image
						src='/image.jpeg'
						fill
						alt='player'
						className=' object-fill rounded-md'
					/>
					<div className='absolute bottom-0 w-full '>
						<div className=' flex flex-col px-4 pb-2 gap-2 rounded-md text-slate-50 bg-gradient-to-b from-transparent via-slate-600/50 w-full to-slate-800/60'>
							<Play className='h-10 w-10 bg-orange-600 shadow-sm shadow-orange-500/20 rounded-md hover:scale-110 cursor-pointer text-slate-200 p-2' />
							<h1 className='font-bold'>
								11 PLAYERS OF OUR TEAM THIS
								SEASON
							</h1>
							<div className='flex gap-3 items-center text-xs'>
								<p>14h</p>
								<hr className='h-3 border border-slate-400' />
								video
							</div>
						</div>
					</div>
				</div>
				<div className='relative md:w-[50%] '>
					<video
						controls
						// autoPlay
						className='rounded-md shadow-sm cursor-pointer h-48 lg:h-fit w-full object-cover  relative transition-all ease-in-out duration-150 shadow-slate-600'>
						<source
							src='/gasogi.mp4'
							type='video/mp4'
						/>
					</video>
					{/* <div className='absolute top-0 w-full '>
						<div className='  flex-col hidden lg:flex px-4 py-4 gap-2 text-orange-600 bg-gradient-to-b from-slate-800/20 via-slate-600/20 w-full to-transparent'>
							<h1 className='font-bold text-lg text-orange-600'>
								11 PLAYERS OF OUR TEAM THIS
								SEASON
							</h1>
							<div className='flex gap-3 items-center text-xs'>
								<p>14h</p>
								<hr className='h-3 border border-orange-600' />
								video
							</div>
						</div>
					</div> */}
				</div>
			</div>
			<div className=' pt-6 '>
				<CardList />
			</div>
		</main>
	);
}
