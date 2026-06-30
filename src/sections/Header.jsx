import dibilogo from "../assets/icons/dibilogo.svg";
import Button from "../shared/Button";
export default function Header() {
	const links = [
		{ title: "Home", link: "#" },
		{ title: "Courses", link: "#" },
		{ title: "About", link: "#" },
		{ title: "Contact", link: "#" },
	];

	return (
		<header className="bg-header sticky top-0 px-10 py-3 flex justify-between items-center">
			<div className="flex gap-4">
				<img src={dibilogo} alt="dibiedu logo" width={16} height={16} />
				<p className="font-bold text-lg">DebiEdu</p>
			</div>
			<nav className="flex gap-8 justify-between items-center text-sm">
				<ul className="hidden md:flex md:gap-8">
					{links.map((el) => {
						return (
							<li>
								<a href={el.link} className="hoverable clickable">
									{el.title}
								</a>
							</li>
						);
					})}
				</ul>
				<Button text="Sign Up" />
			</nav>
		</header>
	);
}
