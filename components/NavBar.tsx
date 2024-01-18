"use client";

import { AlignRight } from "lucide-react";
import Image from "next/image";
import {
	Button,
	buttonVariants,
} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { NAVLINKS } from "@/constants";
import Link from "next/link";
import MenuBar from "./MenuBar";
import { usePathname } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
	const pathname = usePathname();
	return (
		<header className=''>
			<MenuBar />
			<nav className='bg-orange-600 h-14 px-8 py-0 flex  items-center text-white'>
				<div className='flex  items-center gap-2 '>
					{/* <Sheet>
						<SheetTrigger asChild>
							<AlignRight className='md:h-10 md:w-10 h-7 w-7 cursor-pointer' />
						</SheetTrigger>
						<SheetContent>
							<SheetHeader></SheetHeader>
							<ul className=' gap-5 flex flex-col'>
								{NAVLINKS.map((navlink) => {
									let activeLink = "";
									if (
										navlink.link ===
										pathname
									) {
										activeLink =
											navlink.label;
									}
									// console.log(activeLink);

									return (
										<Link
											href={
												navlink.link
											}
											key={
												navlink.label
											}
											className={
												activeLink
													? "bg-orange-800/70 py-2 text-white rounded-sm shadow-sm shadow-orange-500"
													: "whitespace-nowrap"
											}>
											{navlink.label}
										</Link>
									);
								})}
							</ul>
							<SheetFooter>
								<SheetClose asChild>
									<Button type='submit'>
										Save changes
									</Button>
								</SheetClose>
							</SheetFooter>
						</SheetContent>
					</Sheet> */}
					<Image
						src='/logo.png'
						width={80}
						height={80}
						alt='logo'
						className='object-contain   cursor-pointer '
					/>
					{/* <hr className=' h-10 border hidden lg:block border-slate-200' />
					<Image
						src={
							"https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--e05c6091-9f39-4b04-8af2-d5cb7e37dbfa/champions.app.png?preferwebp=true"
						}
						width={30}
						height={30}
						alt='achivement'
						className='hidden lg:block'
					/> */}
				</div>
				<ul className=' gap-5 hidden lg:flex flex-1 ml-6'>
					{NAVLINKS.map((navlink) => {
						let activeLink = "";
						if (navlink.link === pathname) {
							activeLink = navlink.label;
						}
						// console.log(activeLink);

						return (
							<Link
								href={navlink.link}
								key={navlink.label}
								className={
									activeLink
										? "underline decoration-slate-100 capitalize font-bold text-white  underline-offset-[19px] decoration-[4px]"
										: "whitespace-nowrap uppercase font-bold text-white text-sm"
								}>
								{navlink.label}
							</Link>
						);
					})}
				</ul>
				<div className='flex items-center justify-end'>
					<form
						action=''
						className='flex bg-orange-500/60 px-2 cursor-pointer items-center rounded-md'>
						<input
							className='bg-transparent outline-none placeholder:text-orange-900 text-orange-900 border-none px-2 py-1'
							placeholder='Search...'
						/>
						<MagnifyingGlassIcon className='h-6 w-6' />
						<button hidden type='submit'>
							Search
						</button>
					</form>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
