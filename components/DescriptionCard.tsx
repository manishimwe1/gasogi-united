import { cn } from "@/lib/utils";
import { ShareIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import CardFooter from "./CardFooter";

type Props = {
	category: string;
	href: string;
	title: string;
	sm?: boolean;
	lg?: boolean;
};
const DescriptionCard = ({
	category,
	href,
	title,
	sm,
	lg,
}: Props) => {
	return (
		<div
			className={cn(
				" group absolute bottom-0 inset-x-0 px-4 pb-3  duration-200 ease-in-out  flex flex-col gap-3 bg-gradient-to-t from-black/80 via-black/60 to-black/0 rounded-b-md",
				lg ? "px-12" : "",
			)}>
			{category === "Match coverage" ? (
				<span className='absolute py-[2px] top-0 left-0 w-0 h-[2px] bg-orange-400 transition-all group-hover:w-[50%] duration-1000 delay-500 ' />
			) : (
				<PlayIcon className='h-10 w-10 bg-orange-500 text-white rounded-md p-2' />
			)}
			<p
				className={cn(
					"font-bold text-slate-50  uppercase tracking-wider py-2",
					sm ? "text-lg" : "text-xl",
					lg ? "text-3xl" : "text-xl",
				)}>
				{title}
			</p>
			{category === "Match coverage" ? (
				<p className='text-xs font-semibold cursor-pointer hover:underline decoration-2 underline-offset-4 decoration-orange-600  text-white'>
					VIEW GALLERY &rarr;
				</p>
			) : (
				""
			)}
			<CardFooter href={href} category={category} />
		</div>
	);
};

export default DescriptionCard;
