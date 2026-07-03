export default function Link({ link, title, icon = null, active = true }) {
	function style() {
		if (active) {
			return "hover:underline hover:cursor-pointer";
		} else {
			return " text-grey-100";
		}
	}

	return (
		<a href={link} className={style()}>
			<span>{icon}</span>
			{title}
		</a>
	);
}
