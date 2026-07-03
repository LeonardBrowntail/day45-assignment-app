import Hero from "../contents/Hero";
import Reasons from "../contents/Reasons";
import Featured from "../contents/Featured";
import Button from "../shared/Button";

export default function Content() {
	return (
		<div>
			<Hero />
			<Reasons />
			<Featured />
			<div className="px-4 py-3 flex justify-center items-center">
				<Button
					text="View All Courses"
					color="bg-button-alt"
					textColor="text-black"
				/>
			</div>
		</div>
	);
}
