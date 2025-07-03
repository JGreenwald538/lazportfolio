"use client";

import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function WinonaPage() {
	return (
		<div className="flex flex-row h-screen bg-white">
			<Sidebar screen="winona" />
			<div className="flex flex-col w-full h-screen overflow-y-auto bg-white text-black">
				{/* Section 1 */}
				<div className="w-full flex flex-row min-h-screen">
					<div className="w-1/2 flex flex-col justify-center">
						<div className="flex flex-col space-y-4 px-10">
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
						<div className="text-left w-full px-10 pb-12 pt-4 font-semibold font-helvetica">
							Summer &apos;25
						</div>
						<div className="mx-10 text-3xl font-light font-outfit">
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
				<div className="w-full flex flex-col min-h-screen p-4">
					<div className="text-md text-[#ACACAC] font-bold border-b-2 border-[#EEEEEE] w-1/2 py-2">
						WINONA DESIGN INTERNSHIP
					</div>
					<div className="text-[5.4rem] w-1/2 text-[#312849] py-1 font-semibold border-b-2 border-[#1E1E1E] font-poppins">
						Audience & Insight Overview
					</div>
					<div>
						<div>
							Pain Points{" "}
							<ul>
								<li>
									Silence around menopause: Women often feel isolated,
									uninformed, or ignored by traditional healthcare systems.
								</li>{" "}
								<li>
									Symptoms dismissed or misunderstood: Many providers minimize
									the severity of menopause-related symptoms.
								</li>{" "}
								<li>
									Embarrassment or denial: Women may not be ready to acknowledge
									they&apos;re in menopause, making outreach tricky.
								</li>{" "}
								<li>
									Lack of trusted treatment: Skepticism around hormone therapy
									and confusion due to outdated studies or misinformation.
								</li>
							</ul>{" "}
							<div>Target Audience</div>{" "}
							<div>Women 35–59, especially those who:</div>
							<ul>
								<li>
									Are entering or in the menopause transition (including
									perimenopause)
								</li>{" "}
								<li>Are proactive about their health, but feel underserved</li>{" "}
								<li>Prefer private and accessible solutions</li>
								<li>Are seeking symptom relief without stigma</li>{" "}
								<li>
									Value education, trust, and clear communication from providers
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
