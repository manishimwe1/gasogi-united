import ShorterCard from "./ShorterCard";

export function CardList() {
	const card = [1, 2, 3, 4];
	return (
		<div className='grid grid-cols-1  sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 gap-2 lg:gap-4 w-full '>
			{card.map((_, i) => (
				<ShorterCard />
			))}
		</div>
	);
}
