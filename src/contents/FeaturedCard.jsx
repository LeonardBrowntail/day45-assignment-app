export default function FeaturedCard({ img, title, desc }) {
	return (
		<figure className="min-w-75 pb-3 flex flex-col gap-3">
			<img
				src={img}
				alt="Picture with clouds and a tree"
				className="h-42 object-cover rounded-lg"
			/>
			<figcaption>
				<p className="font-bold">{title}</p>
				<p className="text-sm">{desc}</p>
			</figcaption>
		</figure>
	);
}
