import dibilogo from "../assets/icons/dibilogo.svg";
import Button from "../shared/Button";
import Link from "../shared/Link";
export default function Header() {
	const links = [
		{ title: "Home", link: "#", icon: null, active: true },
		{ title: "Courses", link: "#", icon: null, active: true },
		{ title: "About", link: "#", icon: null, active: true },
		{ title: "Contact", link: "#", icon: null, active: true },
	];

	function showLinks(li, i) {
		return (
			<li key={i}>
				<Link
					link={li.link}
					title={li.title}
					active={li.active}
					icon={li.icon}
				/>
			</li>
		);
	}

	return (
		<header className="bg-header sticky top-0 px-10 py-3 flex justify-between items-center">
			<div className="flex gap-4">
				<img src={dibilogo} alt="dibiedu logo" width={16} height={16} />
				<p className="font-bold text-lg">DebiEdu</p>
			</div>
			<nav className="flex gap-8 justify-between items-center text-sm">
				<ul className="hidden md:flex md:gap-8">{links.map(showLinks)}</ul>
				<Button text="Sign Up" />
			</nav>
		</header>
	);
}
