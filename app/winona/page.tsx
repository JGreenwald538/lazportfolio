"use client";

import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function WinonaPage() {
	return (
		<div className="flex flex-row h-screen bg-white">
			<Sidebar screen="winona" />
			<div className="flex flex-col w-full h-screen overflow-y-auto bg-white text-black">
				{/* Section 1 */}
				<div className="w-full flex flex-row min-h-screen p-10">
					<div className="w-1/2 flex flex-col justify-center">
						<div className="flex flex-col space-y-4">
							<Image
								src="/Winona/winona.svg"
								alt="Winona"
								width={1000}
								height={1000}
								className="w-full h-auto text-[#312849]"
							/>
							<div className="text-5xl whitespace-nowrap font-semibold text-[#312849CC] font-poppins">
								Design Internship
							</div>
						</div>
						<div className="text-left w-full pb-12 pt-4 font-semibold font-helvetica">
							Summer &apos;25
						</div>
						<div className="text-3xl font-light font-outfit">
							Winona is a leading telehealth company specializing in menopause
							care for women aged 35 to 59. They provide science-backed,
							personalized treatment through bioidentical hormone replacement
							therapy (BHRT), delivered directly to patients’ homes. Winona
							empowers women with a supportive online platform that includes
							access to physicians, educational content, and a vibrant
							community.
						</div>
					</div>
					<div className="w-1/2 flex flex-col justify-center items-center space-y-4">
						<Image
							src="/Winona/winona1.png"
							alt="Winona"
							width={1000}
							height={1000}
							className="w-full h-auto px-10"
						/>
					</div>
				</div>

				{/* Section 2 */}
				<div className="min-h-screen bg-white text-[#312849] p-10 font-sans">
					<div className="max-w-6xl bg-white">
						<p className="uppercase text-sm font-semibold tracking-wide text-gray-400 border-b-2 border-[#EEEEEE] w-1/2">
							Winona Design Internship
						</p>
						<h1 className="text-6xl sm:text-7xl font-semibold mt-2 w-1/2">
							Audience & Insight Overview
						</h1>
						<hr className="my-6 border-[#1E1E1E]" />

						<div className="grid md:grid-cols-2 gap-10">
							{/* Left Side */}
							<div className="space-y-6 items-stretch">
								<div>
									<h2 className="text-xl font-semibold mb-2">Pain Points</h2>
									<ul className="list-disc list-inside space-y-1 text-xl">
										<li>
											Silence around menopause: Women often feel isolated,
											uninformed, or ignored by traditional healthcare systems.
										</li>
										<li>
											Symptoms dismissed or misunderstood: Many providers
											minimize the severity of menopause-related symptoms.
										</li>
										<li>
											Embarrassment or denial: Women may not be ready to
											acknowledge they&apos;re in menopause, making outreach
											tricky.
										</li>
										<li>
											Lack of trusted treatment: Skepticism around hormone
											therapy and confusion due to outdated studies or
											misinformation.
										</li>
									</ul>
								</div>

								<div>
									<h2 className="text-xl font-semibold mb-2">
										Target Audience
									</h2>
									<p className="mb-2 text-xl">
										Women 35–59, especially those who:
									</p>
									<ul className="list-disc list-inside space-y-1 text-xl">
										<li>
											Are entering or in the menopause transition (including
											perimenopause)
										</li>
										<li>
											Are proactive about their health, but feel underserved
										</li>
										<li>Prefer private and accessible solutions</li>
										<li>Are seeking symptom relief without stigma</li>
										<li>
											Value education, trust, and clear communication from
											providers
										</li>
									</ul>
								</div>
							</div>

							{/* Right Side */}
							<div className="space-y-6">
								<div>
									<h2 className="text-xl font-semibold mb-2">
										Common Symptoms
									</h2>
									<ul className="list-disc list-inside space-y-1 text-xl">
										<li>Hot flashes & night sweats</li>
										<li>Mood swings, anxiety, depression</li>
										<li>Fatigue & brain fog</li>
										<li>Sleep disturbances</li>
										<li>Vaginal dryness & low libido</li>
										<li>Weight gain & slowed metabolism</li>
										<li>Skin dryness & loss of elasticity</li>
									</ul>
								</div>

								<div className="w-full h-80 rounded-xl bg-[#B795BB] shadow-lg" />
							</div>
						</div>
					</div>
				</div>
				{/* Section 3 – Favorite Designs */}
				<div className="min-h-screen bg-white text-[#312849] p-10 font-sans">
					<p className="uppercase text-sm font-semibold tracking-wide text-gray-400 border-b-2 border-[#EEEEEE] w-1/2">
						Winona Design Internship
					</p>
					<div className="flex flex-col justify-center h-full space-y-5">
						<h1 className="text-6xl sm:text-7xl font-semibold mt-2">
							Favorite Designs
						</h1>
						<div className="flex flex-row space-x-12">
							<div className="h-96 w-1/2 rounded-xl bg-[#B795BB] shadow-xl" />
							<div className="h-96 w-1/2 rounded-xl bg-[#B795BB] shadow-xl" />{" "}
						</div>
					</div>
				</div>

				{/* Section 4 – Campaigns */}
				<div className="min-h-screen bg-white text-[#312849] p-10 font-sans">
					<div className="flex flex-row h-full">
						<div className="mr-5 flex-1 h-full">
							<p className="uppercase text-sm font-semibold tracking-wide text-gray-400 border-b-2 border-[#EEEEEE] w-1/2">
								Winona Design Internship
							</p>
							<h1 className="text-6xl sm:text-7xl font-semibold mt-2">
								Campaigns
							</h1>
							<hr className="my-6 border-[#1E1E1E]" />

							{/* Text section */}
							<div className="space-y-6">
								<div className="flex flex-col space-y-3">
									<h2 className="text-xl font-bold uppercase">Problem</h2>
									<p className="text-xl">
										<strong>Menopause still lives in the shadows.</strong> Even
										though it affects half the population, menopause is rarely
										talked about which leaves many women to navigate it alone.
										Misinformation and stigma, combined with a lack of real
										support, make it harder for women to find the relief they
										deserve.
									</p>
								</div>
								<div className="flex flex-col space-y-3">
									<h2 className="text-xl font-bold uppercase">Needs</h2>
									<p className="text-xl">
										Advertising for Winona has to be carefully thought out:
										acknowledging symptoms without shame, offering real
										solutions without overpromising. Many women aren’t ready to
										talk openly about menopause or admit they’re in it. That’s
										why our messaging is empathetic and focused on real,
										personalized care.
									</p>
								</div>
								<div className="h-64 rounded-xl bg-[#B795BB] shadow-xl" />
							</div>
						</div>

						{/* Images grid */}
						<div className="w-full pl-5 border-l-[1px] border-[#1E1E1E] flex-1 justify-center h-full flex flex-col space-y-16">
							<div className="flex flex-row justify-between w-full">
								<div className="h-48 w-48 rounded-xl bg-[#B795BB] shadow-xl" />
								<div className="h-48 w-48 rounded-xl bg-[#B795BB] shadow-xl" />
							</div>
							<div className="col-span-2 h-96 w-full rounded-xl bg-[#B795BB] shadow-xl" />
						</div>
					</div>
				</div>

				{/* Section 5 – Designs Grid */}
				<div className="min-h-screen bg-white text-[#312849] p-10 font-sans">
					<p className="uppercase text-sm font-semibold tracking-wide text-gray-400 border-b-2 border-[#EEEEEE] w-1/2">
						Winona Design Internship
					</p>
					<div className="flex flex-col justify-center h-full space-y-20 pt-20">
						<div className="flex flex-row w-full h-3/4 space-x-20">
							<div className="rounded-xl bg-[#B795BB] shadow-xl w-1/2" />
							<div className="rounded-xl bg-[#B795BB] shadow-xl w-1/2" />
						</div>
						<div className="flex flex-row space-x-20 h-1/4">
							<div className="rounded-xl bg-[#B795BB] shadow-xl w-1/2" />
							<div className="rounded-xl bg-[#B795BB] shadow-xl w-1/2" />
						</div>
					</div>
				</div>

				{/* Section 6 – Final Designs */}
				<div className="min-h-screen bg-white text-[#1E1E1E] font-sans">
					<div className="flex flex-row h-full">
						<div className="flex-1 flex flex-col justify-between items-start space-y-6 p-10">
							<div className="flex flex-col space-y-20">
								<p className="uppercase text-sm font-semibold tracking-wide text-gray-400 border-b-2 border-[#EEEEEE] w-full">
									Winona Design Internship
								</p>
								<h1 className="text-6xl sm:text-5xl font-medium mt-2 text-[#0A1A46]">
									Final Designs
								</h1>

								<p className="text-3xl mt-6 font-helvetica text-[#52575E] font-light">
									These final designs from the campaigns helped me understand
									what ads would reach certain women who need Winona the most. I
									learned a lot about different forms of social media ads and
									how to incorporate certain elements into my designs. Enjoy!
								</p>
							</div>

							<div className="mt-10 text-sm text-gray-500 border-t border-[#EEEEEE] pt-4">
								Laz Racusin &nbsp; | &nbsp; Winona &nbsp; | &nbsp; Summer 2025
							</div>
						</div>
						<div className="w-3/5 h-full bg-[#B795BB] shadow-xl" />
					</div>
				</div>
			</div>
		</div>
	);
}
