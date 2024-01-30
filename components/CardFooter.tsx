import { ShareIcon } from "@heroicons/react/24/solid";
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
				<p>6h</p>
				<hr className='w-px h-3  bg-slate-50' />
				<Link href={href}>{category}</Link>
			</div>
			<ShareIcon className='h-6 w-6' />
		</div>
	);
};

export default CardFooter;
