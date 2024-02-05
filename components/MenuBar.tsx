// import {
// 	NavigationMenu,
// 	NavigationMenuContent,
// 	NavigationMenuIndicator,
// 	NavigationMenuItem,
// 	NavigationMenuLink,
// 	NavigationMenuList,
// 	NavigationMenuTrigger,
// 	NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";
import { BRANDS } from "@/constants";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MenuBar = () => {
	return (
		<div className=' bg-[#1a1a1a] shadow-lg shadow-[#0c0b0b] pl-2 pr-4 h-7 flex items-center justify-between'>
			<div className='flex items-center'>
				{/* <NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem className='bg-none'>
							<NavigationMenuTrigger className='gap-2 bg-none text-slate-400 text-xs'>
								<Globe className='w-5 h-5' />{" "}
								<span className='text-[10px] md:text-xs'>
									ENG
								</span>
							</NavigationMenuTrigger>
							<NavigationMenuContent className=''>
								<div className='flex flex-col py-4 gap-2 w-full '>
									<NavigationMenuLink className='langMenu'>
										English
									</NavigationMenuLink>
									<NavigationMenuLink className='langMenu'>
										Kinyarwanda
									</NavigationMenuLink>
									<NavigationMenuLink className='langMenu'>
										Francais
									</NavigationMenuLink>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu> */}
				<hr className='h-5 border border-slate-600 mr-2' />
				{/* <NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem className='bg-none'>
							<NavigationMenuTrigger className='gap-2 bg-none  text-slate-400'>
								<UserIcon className='h-5 w-5 ' />
								<p className='text-[10px] md:text-xs'>
									Sign in
								</p>
							</NavigationMenuTrigger>
							<NavigationMenuContent className='w-full '>
								<div className='flex flex-col py-4 gap-2 '>
									<NavigationMenuLink className='langMenu'>
										Login
									</NavigationMenuLink>
									<NavigationMenuLink className='langMenu'>
										Sign Up
									</NavigationMenuLink>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu> */}
			</div>
			<div className=' hidden md:flex items-center gap-2'>
				{BRANDS.map(({ src, title, herf }) => (
					<div
						key={title}
						className=' relative h-5 w-12'>
						<Link href={herf} target='_blank'>
							<Image
								src={src}
								alt={title}
								fill
								className='cursor-pointer object-contain-center absolute w-full'
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default MenuBar;
