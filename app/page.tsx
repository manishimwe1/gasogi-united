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
			<section className='container  mx-auto'>
				<HeadTitle
					title='TODAY ON GASOGI - UNITED.COM'
					link='FIND MORE STORIES'
				/>
				<div className='flex flex-col  md:flex-row gap-4 md:gap-8'>
					<CardComponent />
					<div className='relative md:w-[50%] '>
						<VideoCard />
					</div>
				</div>
				<div className=' pt-8 '>
					<CardList />
				</div>
			</section>
			<section className='bg-white py-1 pb-8 mt-10 flex flex-col gap-5'>
				<ThisWeekFixtures />
				<div className='max-w-5xl relative overflow-hidden w-full h-56 mx-auto  '>
					<Banner />
				</div>
			</section>
			<section className='container mx-auto flex flex-col gap-7'>
				<HeadTitle
					title='Latest videos'
					link='Watch more on gasogi united tv'
				/>
				<div className='flex flex-col  md:flex-row gap-4 md:gap-8'>
					<VideoCard />
					<VideoCard />
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
			<section className='bg-white py-5 pb-8 mt-10 flex flex-col gap-5'>
				<div className='max-w-5xl relative overflow-hidden w-full h-20 mx-auto  '>
					<Banner />
				</div>
				<div className='relative w-full  h-96'>
					<div className='overflow-hidden h-fit w-full'>
						<VideoCard
							sm={true}
							rounded={false}
						/>
					</div>
				</div>
			</section>
			<section className='container  mx-auto mt-20 py-4 '>
				<HeadTitle
					title='In case you missed it:'
					link='FIND MORE STORIES'
				/>
				<div className='flex flex-col  md:flex-row gap-4 md:gap-8'>
					<CardComponent />
					<ShopCard />
				</div>
				<div className=' pt-8 '>
					<CardList />
				</div>
			</section>
			<section className='bg-white py-5 pb-8 mt-10 flex flex-col gap-5'>
				<MatchReviewer />
			</section>

			{/* TODO:Enter in stock  */}

			<section className='container  mx-auto'>
				<HeadTitle
					title='GASOGI UNITED WOMEN'
					link='FIND MORE ON UNITED WOMEN'
				/>
				<div className='flex flex-col  md:flex-row gap-4 md:gap-8'>
					<CardComponent />
					<CardComponent />
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5 lg:gap-5 lg:grid-cols-4 mt-8'>
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
			<section className='container mx-auto flex flex-col gap-7'>
				<HeadTitle
					title='The academy'
					link='Find more on academy'
				/>
				<div className='flex flex-col  md:flex-row gap-4 md:gap-8'>
					<VideoCard />
					<VideoCard />
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5 lg:gap-5 lg:grid-cols-4'>
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
			<section className='bg-white py-5 pb-8 mt-10 flex flex-col gap-5'>
				<div className='relative w-full  h-96'>
					<div className='overflow-hidden h-fit w-full'>
						<VideoCard
							sm={true}
							rounded={false}
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
