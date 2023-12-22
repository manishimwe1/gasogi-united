import React from "react";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { FileType } from "@/typing";

const SkeletonLoder = ({
	skeletonLoader,
}: {
	skeletonLoader: FileType[];
}) => {
	return (
		<div className='flex flex-col space-y-5 pb-10'>
			<Button
				className='ml-auto w-36 h-10 mb-5'
				variant={"outline"}>
				<Skeleton className='h-5 w-full' />
			</Button>
			{skeletonLoader.map((file) => (
				<div
					key={file.id}
					className='flex items-center space-x-4 p-5 w-full'>
					<Skeleton className='h-12 w-12' />
					<Skeleton className='h-12 w-full' />
				</div>
			))}
			<div className='border rounded-lg'></div>
		</div>
	);
};

export default SkeletonLoder;
