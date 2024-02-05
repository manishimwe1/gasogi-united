import { Share2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CardFooter = ({
	href,
	category,
}: {
	href: string;
	category: string;
}) => {
	return (
		<div className='  flex gap-2 text-xs text-slate-50 items-center py-2 justify-between '>
			<div className='flex gap-2'>
				<p className='text-xs'>6h</p>
				<hr className='w-px h-3  bg-slate-50' />
				<Link href={href}>{category}</Link>
			</div>
			<Share2Icon className='h-6 w-6' />
		</div>
	);
};

export default CardFooter;
