import img1 from "../assets/images/featured1.png";
import img2 from "../assets/images/featured2.png";
import img3 from "../assets/images/featured3.png";
import FeaturedCard from "./FeaturedCard";

export default function Featured() {
	const featured = [
		{
			img: img1,
			title: "Web Development Fundamentals",
			desc: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
		},
		{
			img: img2,
			title: "Advanced JavaScript Techniques",
			desc: "Dive deep into JavaScript concepts like asynchronous programming, closures, and ES6 features.",
		},
		{
			img: img3,
			title: "Responsive Design Mastery",
			desc: "Master the art of creating websites that adapt to different screen sizes and devices.",
		},
	];

	function showAllFeatured(el, i) {
		return (
			<FeaturedCard key={i} img={el.img} title={el.title} desc={el.desc} />
		);
	}

	return (
		<section className="p-4">
			<h2 className="pt-5 pb-3 font-bold text-[22px]">Featured Courses</h2>
			<div className="flex gap-3 overflow-scroll md:overflow-visible">
				{featured.map(showAllFeatured)}
			</div>
		</section>
	);
}
