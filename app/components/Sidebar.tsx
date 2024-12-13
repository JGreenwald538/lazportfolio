'use client'

import Link from "next/link";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const borderClasses: { [key: string]: string } = {
	artistWork: "md:border-r-[#ffc176] border-b-[#ffc176]",
	posters: "md:border-r-[#466995] border-b-[#466995]",
	albumcovers: "md:border-r-[#ACD2ED] border-b-[#ACD2ED]",
	logoBranding: "md:border-r-[#4C9459] border-b-[#4C9459]",
	aboutMe: "md:border-r-[#840032] border-b-[#840032]",
};

export default function Sidebar({ screen }: { screen: string }) {
	const borderClass = borderClasses[screen] || "border-r-gray-400";
	return (
		<div
			className={`md:h-screen md:w-fit h-fit w-screen ${borderClass} md:py-4 pb-4 pl-6 md:pr-6 flex flex-col sticky top-0 bg-slate-950 md:border-r-4 md:border-b-0 border-b-4 md:mr-4 mr-0 z-10`}
		>
			<div className="flex md:flex-col flex-row mb-4 md:items-start items-center justify-center">
				<Link
					className="rounded-full border-white #border-2 w-[3.75rem] h-[3.75rem] flex justify-center items-center mt-5"
					href={"/aboutMe"}
				>
					<Image src={"/logo.png"} alt={"Logo"} width={4000} height={4000} />
				</Link>
				<div className="text-xl md:ml-0 ml-2 md:mt-2 mt-5 font-bold">Lazar</div>
				<div className="font-bold md:mt-0 mt-5 text-xl md:ml-0 ml-2">
					Racusin
				</div>
			</div>
			<div className="md:flex-grow md:flex md:flex-col flex-row justify-center md:items-start items-center w-full md:space-y-2 md:space-x-0 space-x-2 min-w-fit md:whitespace-nowrap whitespace-pre-wrap">
				<Link
					href={"/"}
					className={`${
						screen === "albumcovers" ? "text-[#ACD2ED]" : "hover:text-[#ACD2ED]"
					}`}
				>
					Album Covers
				</Link>
				<div className="inline md:hidden">|</div>
				<Link
					href={"/posters"}
					className={`${
						screen === "posters" ? "text-[#466995]" : "hover:text-[#466995]"
					}`}
				>
					Posters
				</Link>
				<div className="inline md:hidden">|</div>
				<Link
					href={"/logobranding"}
					className={`${
						screen === "logoBranding"
							? "text-[#4C9459]"
							: "hover:text-[#4C9459]"
					}`}
				>
					Logo & Branding
				</Link>
				<div className="inline md:hidden">|</div>
				<Link
					href={"/artistWork"}
					className={`${
						screen === "artistWork" ? "text-[#ffc176]" : "hover:text-[#ffc176]"
					}`}
				>
					Artist Work
				</Link>
				<div className="inline md:hidden">|</div>
				<Link
					href={"/aboutMe"}
					className={`${
						screen === "aboutMe" ? "text-[#840032]" : "hover:text-[#840032]"
					}`}
				>
					About Me
				</Link>
			</div>
			<div className="flex flex-col">
				<button className="flex flex-row items-center" onClick={() => {
					navigator.clipboard.writeText("lazardesigns11@gmail.com");
					alert("Emailed copied")
				}}>
					<MdOutlineMailOutline />
					<div className="ml-1">lazardesigns11@gmail.com</div>
				</button>
				<Link
					className="flex flex-row items-center"
					href={"https://www.instagram.com/lazardesigns_/"}
					target="_blank"
				>
					<FaInstagram />
					<div className="ml-1">@lazardesigns_</div>
				</Link>
			</div>
		</div>
	);
}
