"use client";

import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function WinonaPage() {
	return (
		<div className="flex flex-row bg-white  h-screen">
			<Sidebar screen="winona" />
			<div className="flex flex-row w-full h-full bg-white text-black">
				<div className="w-1/2 h-full flex flex-col justify-center items-center">
					<div className="flex flex-col justify-center items-center space-y-4 mx-10">
						<Image
							src="/Winona/winona.svg"
							alt="Winona"
							width={1000}
							height={1000}
							className="w-full h-auto text-[#312849]"
						/>
						<div className="text-5xl text-center whitespace-nowrap font-semibold text-[#312849] font-poppins">
							Design Internship
						</div>
					</div>
					<div className="text-left w-full px-10 pb-12 pt-4 font-semibold font-helvetica">
						Summer '25
					</div>
					<div className="mx-10 text-3xl font-light font-outfit">
						Winona is a leading telehealth company specializing in menopause
						care for women aged 35 to 59. They provide science-backed,
						personalized treatment through bioidentical hormone replacement
						therapy (BHRT), delivered directly to patients’ homes. Winona
						empowers women with a supportive online platform that includes
						access to physicians, educational content, and a vibrant community.
					</div>
				</div>
				<div className="w-1/2 h-full flex flex-col justify-center items-center space-y-4">
					<div className="bg-[#B795BB] w-40 h-40"></div>
				</div>
			</div>
		</div>
	);
}
