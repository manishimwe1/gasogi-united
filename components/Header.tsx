import Image from "next/image";
import React from "react";
import {
	SignInButton,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { DarkMode } from "./DarkMode";

const Header = () => {
	return (
		<header className='flex items-center justify-between px-8'>
			<Link
				href={"/"}
				className='flex items-center space-x-2'>
				<div className='bg-[#0160fe] w-fit p-2'>
					<Image
						src={
							"https://www.shareicon.net/data/128x128/2016/06/19/603913_dropbox_512x512.png"
						}
						alt='logo'
						width={50}
						height={50}
						className='invert'
					/>
				</div>
				<h1 className='font-bold text-xl'>
					DropBox
				</h1>
			</Link>
			<div className='flex items-center space-x-2'>
				<DarkMode />
				<UserButton afterSignOutUrl='/' />
				<SignedOut>
					<SignInButton
						afterSignInUrl='/dashboard'
						mode='modal'
					/>
				</SignedOut>
			</div>
		</header>
	);
};

export default Header;
