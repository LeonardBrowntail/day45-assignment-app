import Button from "../shared/Button";

export default function Hero() {
	return (
		<main className="p-4 text-whitish-text">
			<figure
				className={
					"bg-[linear-gradient(to_right,rgba(0,0,0,0.1),rgba(0,0,0,0.4)),var(--hero-img)] bg-no-repeat bg-cover bg-center rounded-lg px-5 py-27 flex flex-col items-center justify-center gap-5"
				}
			>
				<div className="flex flex-col text-center text-white gap-2">
					<h1 className="text-5xl/snug font-black tracking-tighter">
						Unlock Your Potential with EduLearn
					</h1>
					<p className="text-base">
						Embark on a journey of knowledge and skill development with our
						comprehensive online courses. Learn at your own pace, anytime,
						anywhere.
					</p>
				</div>
				<Button text="Start Learning" />
			</figure>
		</main>
	);
}
