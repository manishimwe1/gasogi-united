import { ShareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const CardComponent = () => {
	return (
		<div className=' group cursor-pointer w-full  hover:shadow-md hover:border-none hover:rounded-md hover:shadow-slate-500 h-full rounded-md  bg-white '>
			<div className='flex gap-4 rounded-l-md  py-[9px] w-full'>
				<div className='w-1/2  overflow-hidden h-full  relative rounded-l-md'>
					<div className=' h-[238px] lg:h-[372px] relative rounded-l-md'>
						<Image
							src={"/image.jpeg"}
							alt='cardImage'
							fill
							className='object-cover object-center cursor-pointer group-hover:transition-all ease-out group-hover:delay-100  group-hover:scale-105 duration-500 rounded-l-md'
						/>
					</div>
				</div>
				<div className='w-1/2 p-5 relative'>
					<hr className=' group-hover:w-28 group-hover:transition-transform duration-500 group-hover:ease-in delay-500 w-20 border border-orange-500' />

					<h2 className=' text-sm  lg:text-xl uppercase font-bold font-sans text-gray-900 '>
						Mu mikino y’igikombe cy’amahoro
					</h2>
					<p className='md:text-xs text-[11px] mb-4 text-slate-700 font-normal leading-snug lg:leading-5  lg:text-justify line-clamp-4'>
						Mu mikino y’igikombe cy’amahoro Kuri
						uyu wa kane 18/01/2024. Gasogi
						United irahura na Muhazi FC kuri
						Kigali Pele Stadium i saa Cyenda
						z’umugoroba (15h00’) KWINJIRA NI
						UBUNTUU!!!!🎊 Muze dushyigikire
						Ikipe yacu!!{" "}
					</p>
					<span className='text-orange-600 mt-10 hover:underline hover:underline-offset-4 cursor-pointer text-xs md:teb'>
						#Ibyishimoniyontego
					</span>
					<div className='absolute bottom-2 lg:bottom-0 inset-x-0 flex gap-2 text-xs text-muted-foreground items-center  justify-between px-3'>
						<div className='flex gap-2'>
							<p className='text-xs'>6h</p>
							<hr className='w-px h-3  bg-slate-600' />
							<Link href={"/news"}>news</Link>
						</div>
						<ShareIcon className='-4 lg:h-6 w-4 lg:w-6' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
