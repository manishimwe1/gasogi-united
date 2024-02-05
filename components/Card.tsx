import ShorterCard from "./ShorterCard";

export function CardList() {
	const card = [1, 2, 3, 4];
	return (
		<div className='grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-4 gap-4 w-full '>
			{card.map((_, i) => (
				<ShorterCard key={i} />
			))}
		</div>
	);
}
