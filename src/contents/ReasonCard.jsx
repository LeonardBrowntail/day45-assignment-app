export default function ReasonCard({ icon, title, desc }) {
	return (
		<div className="flex flex-col gap-3 rounded-lg border p-4 min-w-75">
			<div className="size-4">{icon}</div>
			<div className="flex flex-col gap-1">
				<p className="text-[16px] font-bold">{title}</p>
				<p className="text-[14px] text-secondary-text">{desc}</p>
			</div>
		</div>
	);
}
