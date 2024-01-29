import { CardList } from "@/components/Card";
import CardComponent from "@/components/CardComponent";
import ThisWeekFixtures from "@/components/ThisWeekFixtures";
import VideoCard from "@/components/VideoCard";
import { Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<main className=' rounded-2xl mt-10    flex flex-col'>
			<div className='container  mx-auto'>
				<div className='flex justify-between items-center pb-3'>
					<div>
						<hr className=' w-20 border border-orange-500' />
						<h3 className='font-extrabold text-slate-900 text-xl pt-1'>
							TODAY ON GASOGI - UNITED.COM
						</h3>
					</div>
					<div>
						<p className=' relative group font-medium text-[10px] text-orange-400  underline-offset-2 transition-transform duration-500 ease-in delay-200 decoration-orange-500 cursor-pointer'>
							<span>FIND MORE STORIES</span>
							<span className='absolute bottom-0 left-0 w-0 h-[2px] bg-orange-400 transition-all group-hover:w-[80%]'></span>
						</p>
					</div>
				</div>
				<div className='flex flex-col  md:flex-row gap-4 md:gap-8'>
					<CardComponent />
					<div className='relative md:w-[50%] '>
						<VideoCard />
					</div>
				</div>
				<div className=' pt-8 '>
					<CardList />
				</div>
			</div>
			<ThisWeekFixtures />
		</main>
	);
}
