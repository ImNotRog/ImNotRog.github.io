export default function Home() {
	return (
		<div className="min-h-screen flex justify-center flex-col">
			<div className="p-10">
				<div className="group mb-2 mt-10 relative lg:inline-block pr-3">
					<div 
						className="font-title leading-[.8] text-[150px] absolute left-3 top-3 group-hover:left-4 group-hover:top-4 text-transparent transition-all duration-300 lg:whitespace-nowrap" 
						style={{ WebkitTextStroke: '3px #E5E5E5' }} 
					>
						ROGER FAN.
					</div>
					<div className="font-title leading-[.8] text-[150px] relative z-10">
						<span className="text-highlight">ROG</span>ER FAN.
					</div>
				</div>
				<div className="font-cursive text-2xl relative z-20">Occasionally Conscious <span className="hidden lg:inline">• Idiocy Aficionado</span> • Professional Caveman</div>

				<div className="text-xl max-w-lg my-4">
					Hi! I&#39;m Roger Fan, a rising junior from Gunn High School.
					This is not my résumé, and do not take it seriously.
				</div>

				<div className="text-xl max-w-lg my-4">
					As your run-of-the-mill Silicon Valley STEM enthusiast, I dabble in mathematics, physics, and computer science&#8212;
					a description that narrows the San Franscisco Bay Area student populace down by a factor of no more than 3.
				</div>
				{/* <div className="text-xl max-w-lg my-4">
					Want to contact me? One may easily find my email address at the bottom of this page, though I suppose these days
					failure to find anyone&#39;s social media accounts is a virtual impossibility.
				</div> */}
			</div>
		</div>
	)
}
