import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Share2Icon } from "lucide-react";

const ShorterCard = ({ long }: { long?: boolean }) => {
	return (
		<div className='  w-full  sm:w-full mx-auto relative'>
			<Card
				className={cn(
					"w-full  relative px-0 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:shadow-md hover:shadow-slate-400",
					long
						? " h-[300px]  lg:h-[450px]"
						: "h-[400px]",
				)}>
				<CardHeader className='w-full h-32'>
					<div className=' relative  overflow-hidden  w-full h-40 '>
						<Image
							src={"/image.jpeg"}
							alt='cardImage'
							width={1000}
							height={100}
							className={cn(
								"object-contain object-center rounded-t-md",
							)}
						/>
						<div className=' absolute bottom-0 bg-gradient-to-b from-orange-500/10 via-orange-500/30 to-orange-500/50 h-3 w-full' />
					</div>
				</CardHeader>
				<CardContent className=' px-2 mt-2'>
					<h2 className='font-semibold '>
						Gasogi United yatsinze Rayon Sports
						iyitrusha cyane
					</h2>
				</CardContent>
				<CardFooter className=''>
					<p className='text-xs text-slate-700 font-normal leading-5 line-clamp-2 text-justify'>
						Mu mikino y’igikombe cy’amahoro Kuri
						uyu wa kane 18/01/2024. Gasogi
						United irahura na Muhazi FC kuri
						Kigali Pele Stadium i saa Cyenda
						z’umugoroba (15h00’) KWINJIRA NI
						UBUNTUU!!!!🎊 Muze dushyigikire
						Ikipe yacu!!{" "}
						<span className='text-orange-600 mt-2 hover:underline hover:underline-offset-4 cursor-pointer'>
							#Ibyishimoniyontego
						</span>
					</p>
				</CardFooter>
				<div
					className={cn(
						" flex gap-2 text-xs text-muted-foreground items-center py-2 justify-between px-3 absolute bottom-0 inset-x-0",
					)}>
					<div className='flex gap-2'>
						<p>6h</p>
						<hr className='w-px h-3  bg-slate-600' />
						<Link href={"/news"}>news</Link>
					</div>
					<Share2Icon className='h-6 w-6 lg:mr-2' />
				</div>
			</Card>
		</div>
	);
};

export default ShorterCard;
