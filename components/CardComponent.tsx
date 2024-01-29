import { ShareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const CardComponent = () => {
	return (
		<div className=' group cursor-pointer md:w-1/2 hover:shadow-md hover:border-none hover:rounded-md hover:shadow-slate-500 w-full  border rounded-md  bg-white '>
			<div className='flex gap-4 rounded-l-md'>
				<div className='w-1/2  overflow-hidden h-full  relative rounded-l-md'>
					<div className=' h-[372px] relative rounded-l-md'>
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

					<h2 className='text-xl uppercase font-bold font-sans text-gray-900 '>
						Mu mikino y’igikombe cy’amahoro
					</h2>
					<p className='text-xs mb-4 text-slate-700 font-normal leading-5 text-justify line-clamp-4'>
						Mu mikino y’igikombe cy’amahoro Kuri
						uyu wa kane 18/01/2024. Gasogi
						United irahura na Muhazi FC kuri
						Kigali Pele Stadium i saa Cyenda
						z’umugoroba (15h00’) KWINJIRA NI
						UBUNTUU!!!!🎊 Muze dushyigikire
						Ikipe yacu!!{" "}
					</p>
					<span className='text-orange-600 mt-10 hover:underline hover:underline-offset-4 cursor-pointer'>
						#Ibyishimoniyontego
					</span>
					<div className='absolute bottom-0 inset-x-0 flex gap-2 text-xs text-muted-foreground items-center py-2 justify-between px-3'>
						<div className='flex gap-2'>
							<p>6h</p>
							<hr className='w-px h-3  bg-slate-600' />
							<Link href={"/news"}>news</Link>
						</div>
						<ShareIcon className='h-6 w-6' />
					</div>
				</div>
			</div>
			{/* <Card className='flex justify-between items-center h-full border border-red-900'>
				<CardHeader className='h-96 relative w-1/2'>
				</CardHeader>

				<CardFooter className='w-1/2'>
				</CardFooter>
			</Card> */}
		</div>
	);
};

export default CardComponent;
