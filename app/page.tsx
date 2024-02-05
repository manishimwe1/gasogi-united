import Banner from "@/components/Banner";
import { CardList } from "@/components/Card";
import CardComponent from "@/components/CardComponent";
import HeadTitle from "@/components/HeadTitle";
import MatchHighLights from "@/components/MatchHighLights";
import MatchReviewer from "@/components/MatchReviewer";
import ShopCard from "@/components/ShopCard";
import ShorterCard from "@/components/ShorterCard";
import ThisWeekFixtures from "@/components/ThisWeekFixtures";
import VideoCard from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import {
	matcHighLights,
	theAcademyInfo,
} from "@/constants";
import Image from "next/image";

export default function Home() {
	return (
		<main className=' rounded-2xl mt-10 flex flex-col gap-8'>
			<section className='px-3 lg:px-0 lg:container  mx-auto'>
				<HeadTitle
					title='TODAY ON GASOGI - UNITED.COM'
					link='FIND MORE STORIES'
				/>
				<div className='flex flex-col rounded-md md:flex-row gap-4 '>
					<div className='md:w-full rounded-md h-full'>
						<CardComponent />
					</div>
					<div className='relative md:w-full rounded-md h-full'>
						<VideoCard rounded={true} />
					</div>
				</div>
				<div className=' pt-8 '>
					<CardList />
				</div>
			</section>
			<section className='bg-white py-1 pb-8 mt-10 flex flex-col gap-5'>
				<ThisWeekFixtures />
				<div className='hidden md:inline-flex max-w-5xl relative overflow-hidden w-full h-56 mx-auto  '>
					<Banner />
				</div>
			</section>
			<section className='px-3 lg:px-0 lg:container mx-auto flex flex-col gap-7'>
				<HeadTitle
					title='Latest videos'
					link='Watch more on gasogi united tv'
				/>
				<div className='flex flex-col  md:flex-row gap-4 md:gap-8 w-full '>
					<div className='w-full'>
						<VideoCard rounded={true} />
					</div>
					<div className='w-full'>
						<VideoCard rounded={true} />
					</div>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5 lg:gap-5 lg:grid-cols-4'>
					{matcHighLights.map((matcHighLight) => (
						<div
							key={matcHighLight.title}
							className='overflow-hidden shadow-sm shadow-black rounded-md'>
							<MatchHighLights
								matcHighLight={
									matcHighLight
								}
							/>
						</div>
					))}
				</div>
			</section>
			<section className='bg-white py-5 pb-8 lg:mt-10 flex flex-col gap-5'>
				<div className='relative w-full h-full lg:h-96'>
					<div className='overflow-hidden w-full h-full'>
						<VideoCard
							lg={true}
							rounded={false}
						/>
					</div>
				</div>
			</section>
			<section className='px-3 lg:px-0 lg:container  mx-auto lg:mt-20 '>
				<HeadTitle
					title='In case you missed it:'
					link='FIND MORE STORIES'
				/>
				<div className='flex flex-col  md:flex-row gap-4 md:gap-8 w-full items-center '>
					<CardComponent />
					<ShopCard />
				</div>
				<div className=' pt-8 '>
					<CardList />
				</div>
			</section>
			<section className='bg-white py-5 pb-8 mt-10 flex flex-col gap-5'>
				<div className=' max-w-5xl relative overflow-hidden w-full h-20 mx-auto  '>
					<Banner />
				</div>
				<MatchReviewer />
			</section>

			{/* TODO:Enter in stock  */}

			<section className='px-3 lg:px-0 lg:container  mx-auto'>
				<HeadTitle
					title='GASOGI UNITED WOMEN'
					link='FIND MORE ON UNITED WOMEN'
				/>
				<div className='flex flex-col  md:flex-row gap-4 md:gap-8'>
					<CardComponent />
					<CardComponent />
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 lg:grid-cols-4 mt-8'>
					{matcHighLights.map((matcHighLight) => (
						<div
							key={matcHighLight.title}
							className='overflow-hidden shadow-sm shadow-black rounded-md'>
							<MatchHighLights
								matcHighLight={
									matcHighLight
								}
							/>
						</div>
					))}
				</div>
			</section>
			<section className='px-3 lg:px-0 lg:container mx-auto flex flex-col gap-1 mt-1'>
				<HeadTitle
					title='The academy'
					link='Find more on academy'
				/>
				<div className='flex flex-col  md:flex-row gap-4 md:gap-8 rounded-md'>
					<VideoCard rounded={true} />
					<VideoCard rounded={true} />
				</div>
				<div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 lg:gap-5 lg:grid-cols-4'>
					{theAcademyInfo.map((matcHighLight) => (
						<div
							key={matcHighLight.title}
							className='overflow-hidden shadow-sm shadow-black rounded-md'>
							{matcHighLight.category ===
							"Match coverage" ? (
								<MatchHighLights
									matcHighLight={
										matcHighLight
									}
								/>
							) : (
								<ShorterCard long={true} />
							)}
						</div>
					))}
				</div>
			</section>
			<section className='bg-white py-5 lg:pb-8 lg:mt-10 flex flex-col gap-5'>
				<div className='relative w-full  lg:h-96'>
					<div className='overflow-hidden h-fit w-full'>
						<VideoCard
							lg={true}
							rounded={false}
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
