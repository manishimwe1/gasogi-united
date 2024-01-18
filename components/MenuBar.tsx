import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { UserIcon } from "@heroicons/react/24/outline";
import { Globe } from "lucide-react";
import Image from "next/image";

const MenuBar = () => {
	return (
		<div className=' bg-[#1a1a1a] shadow-lg shadow-[#0c0b0b] pl-2 pr-4 h-7 flex items-center justify-between'>
			<div className='flex'>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem className='bg-none'>
							<NavigationMenuTrigger className='gap-2 bg-none text-slate-400'>
								<Globe className='w-5 h-5' />{" "}
								ENG
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
				</NavigationMenu>
				<hr className='h-5 border border-slate-600 mr-2' />
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem className='bg-none'>
							<NavigationMenuTrigger className='gap-2 bg-none  text-slate-400'>
								<UserIcon className='h-5 w-5 ' />
								<p>Sign in</p>
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
				</NavigationMenu>
			</div>
			<div className='flex items-center gap-2'>
				<Image
					src='/Team.png'
					alt='bland'
					width={90}
					height={60}
					className=''
				/>
				<Image
					src='/brand.png'
					alt='bland'
					width={30}
					height={30}
				/>
				<Image
					src='/Tezo.png'
					alt='bland'
					width={30}
					height={30}
				/>
				<Image
					src='/DX.png'
					alt='bland'
					width={30}
					height={30}
				/>
			</div>
		</div>
	);
};

export default MenuBar;
