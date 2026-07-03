export default function Footer() {
	const links = [
		{
			link: "",
			text: "Privacy Policy",
		},
		{
			link: "",
			text: "Terms of Service",
		},
		{
			link: "",
			text: "Contact Us",
		},
	];

	function showAllLinks(link, i) {
		return (
			<li key={i}>
				<a href={link.link}>{link.text}</a>
			</li>
		);
	}

	return (
		<footer className="flex justify-center-safe">
			<div className="w-full max-w-240 text-footer">
				<div className="px-5 py-10 flex flex-col gap-6">
					<ul className="flex justify-evenly text-base">
						{links.map(showAllLinks)}
					</ul>
					<p className="text-center">
						&copy; 2026 DibiEdu. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
