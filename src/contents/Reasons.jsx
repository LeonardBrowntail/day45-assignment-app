import { FiBookOpen, FiFileText } from "react-icons/fi";
import ReasonCard from "./ReasonCard";
import { PiCertificate } from "react-icons/pi";

export default function Reasons() {
	const reasonCards = [
		{
			icon: <FiBookOpen height={24} width={24} />,
			title: "Online Material",
			desc: "Access a vast library of high-quality learning materials, including videos, articles, and interactive content.",
		},
		{
			icon: <FiFileText height={"24px"} width={"24px"} />,
			title: "Quizzes & Assignments",
			desc: "Test your knowledge and reinforce your learning with engaging quizzes and practical assignments.",
		},
		{
			icon: <PiCertificate />,
			title: "Certificates",
			desc: "Earn certificates upon completion of courses, showcasing your achievements and enhancing your credentials.",
		},
	];

	function showCards(card, index) {
		return (
			<ReasonCard
				key={index}
				title={card.title}
				desc={card.desc}
				icon={card.icon}
			/>
		);
	}

	return (
		<section className="px-4 py-10 flex flex-col gap-10">
			<div>
				<h2 className="font-black text-4xl/normal tracking-tight">
					Why Choose EduLearn?
				</h2>
				<p>
					Our platform is designed to provide a seamless and effective learning
					experience, ensuring you gain the skills you need to succeed.
				</p>
			</div>
			<div className="flex gap-3 overflow-x-scroll md:overflow-visible">
				{reasonCards.map(showCards)}
			</div>
		</section>
	);
}
