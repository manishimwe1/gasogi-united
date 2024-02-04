import React from "react";

const HeadTitle = ({
	title,
	link,
}: {
	title: string;
	link: string;
}) => {
	return (
		<div className='flex justify-between items-center pb-3'>
			<div>
				<hr className=' w-20 border border-orange-500' />
				<h3 className='font-extrabold uppercase text-white text-base lg:text-lg pt-1'>
					{title}
				</h3>
			</div>
			<div>
				<p className=' relative group uppercase font-medium text-[11px] whitespace-nowrap lg:text-sm text-orange-400  underline-offset-2 transition-transform duration-500 ease-in delay-200 decoration-orange-500 cursor-pointer'>
					<span>{link}</span>
					<span className='absolute bottom-0 left-0 w-0 h-[2px] bg-orange-400 transition-all group-hover:w-[80%]'></span>
				</p>
			</div>
		</div>
	);
};

export default HeadTitle;
