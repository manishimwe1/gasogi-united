import { Play } from "lucide-react";
import Link from "next/link";
import React from "react";
import DescriptionCard from "./DescriptionCard";
import { cn } from "@/lib/utils";

const VideoCard = ({
	lg,
	rounded,
}: {
	lg?: boolean;
	rounded?: boolean;
}) => {
	return (
		<div className='overflow-hidden rounded-md  h-full '>
			<div
				className={cn(
					"relative cursor-pointer   ",
					lg ? "lg:h-[500px] " : "",
					rounded ? "rounded-md" : "rounded-none",
				)}>
				<video
					// autoPlay
					className={cn(
						" transition-all ease-out hover:delay-100 group-hover:scale-105 z-50  hover:scale-105 duration-500  shadow-sm cursor-pointer h-fit  w-full object-cover shadow-slate-600",
						rounded
							? "rounded-md"
							: "rounded-none",
					)}>
					<source
						src='/gasogi.mp4'
						type='video/mp4'
					/>
				</video>
				<DescriptionCard
					lg={true}
					title='FUll Highlits:gasogi ihana nka gahinja Rayon sport'
					href='/math-highlight'
					category='video'
				/>
			</div>
		</div>
	);
};

export default VideoCard;
