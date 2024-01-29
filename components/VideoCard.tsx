import { ShareIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Play } from "lucide-react";
import Link from "next/link";
import React from "react";

const VideoCard = () => {
	return (
		<div className='overflow-hidden group'>
			<div className='relative cursor-pointer transition-all ease-out hover:delay-100  hover:scale-105 duration-500'>
				<video
					// autoPlay
					className='rounded-md shadow-sm cursor-pointer h-48 lg:h-fit w-full object-cover  relative transition-all ease-in-out duration-150 shadow-slate-600'>
					<source
						src='/gasogi.mp4'
						type='video/mp4'
					/>
				</video>
				<div className=' absolute bottom-0 inset-x-0 px-4 pb-3 group-hover:px-6 group-hover:transition-all duration-200 ease-in-out  flex flex-col gap-3 bg-gradient-to-t from-black/70 via-black/50 to-black/0'>
					<PlayIcon className='h-10 w-10 bg-orange-500 text-white rounded-md p-2' />
					<p className='font-bold text-slate-50 text-xl uppercase tracking-wider'>
						Can gasogi start february strongly?
					</p>
					<div className='  flex gap-2 text-xs text-slate-50 items-center py-2 justify-between px-3'>
						<div className='flex gap-2'>
							<p>6h</p>
							<hr className='w-px h-3  bg-slate-50' />
							<Link href={"/news"}>news</Link>
						</div>
						<ShareIcon className='h-6 w-6' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
