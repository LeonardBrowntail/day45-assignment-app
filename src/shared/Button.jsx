export default function Button({
	text,
	active = true,
	color = "bg-button",
	disabledColor = "bg-gray-500",
	textColor = "text-whitish-text",
}) {
	function style() {
		let style = `h-10 px-4 rounded-lg font-bold min-w-21 max-w-120 ${textColor}`;
		if (active) {
			return `${style} ${color} hover:brightness-110 hover:cursor-pointer active:brightness-75`;
		} else {
			return `${style} ${disabledColor}`;
		}
	}
	return <button className={style()}>{text}</button>;
}
