import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<main className='flex flex-col md:flex-row items-center bg-black/60 dark:bg-slate-800'>
			<div className='p-10 flex flex-col bg-black/60 space-y-5 dark:bg-slate-800'>
				<div className='flex flex-col gap-4'>
					<h1 className='text-5xl font-bold text-slate-300'>
						Join over 700 million registered
						users who trust Dropbox
					</h1>
					<p className='text-sm text-gray-900 pb-20 dark:text-slate-300'>
						Easy to use, reliable, private, and
						secure. It’s no wonder Dropbox is
						the choice for storing and sharing
						your most important files.
					</p>
					<Link href={"/dashbaord"} className=''>
						<div className='flex bg-blue-600 w-fit p-5 cursor-pointer'>
							<p className='capitalize whitespace-nowrap'>
								try it for free
							</p>
							<ArrowRight className='ml-2' />
						</div>
					</Link>
				</div>
			</div>
			<div className='bg-gray-500 dark:bg-slate-300 h-full p-10'>
				<video
					autoPlay
					loop
					muted
					className='rounded-lg'>
					<source src='https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4' />
					Your browser does not support the video
				</video>
			</div>
		</main>
	);
}
