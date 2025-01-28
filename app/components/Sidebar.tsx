'use client'

import Link from "next/link";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import useColor from "../use-color";
import { motion } from "motion/react";

const borderClasses: { [key: string]: string } = {
	artistWork: "#ffc176",
	posters: "#466995",
	albumcovers: "#ACD2ED",
	logoBranding: "#4C9459",
	aboutMe: "#840032",
};


export default function Sidebar({ screen }: { screen: string }) {
	const currentBorderColor = borderClasses[screen] || "border-r-gray-400";
	const {color: previousBorderColor, setColor} = useColor();
	const getInitialState = (color: string) => {
		if (window.innerWidth <= 768) {
			// Mobile screen size
			return {
				borderBottomColor: color,
			};
		} else {
			return {
				borderRightColor: color,
			};
		}
	};
	return (
		<motion.div
			className={`md:h-screen md:w-fit h-fit w-screen md:py-4 pb-4 pl-6 md:pr-6 flex flex-col sticky top-0 bg-slate-950 md:border-r-4 md:border-b-0 border-b-4 mr-0 z-10`}
			initial={getInitialState(previousBorderColor)}
			animate={getInitialState(currentBorderColor)}
			transition={{ duration: 1 }}
		>
			<div className="flex md:flex-col flex-row mb-4 md:items-start items-center">
				<Link
					className="rounded-full border-white #border-2 w-[3.75rem] h-[</div>3.75rem] flex justify-center items-center mt-5"
					href={"/aboutMe"}
					onClick={() => {
						setColor(currentBorderColor);
					}}
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
					onClick={() => {
						setColor(currentBorderColor);
					}}
				>
					Album Covers
				</Link>
				<div className="inline md:hidden">|</div>
				<Link
					href={"/posters"}
					className={`${
						screen === "posters" ? "text-[#466995]" : "hover:text-[#466995]"
					}`}
					onClick={() => {
						setColor(currentBorderColor);
					}}
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
					onClick={() => {
						setColor(currentBorderColor);
					}}
				>
					Logo & Branding
				</Link>
				<div className="inline md:hidden">|</div>
				<Link
					href={"/artistWork"}
					className={`${
						screen === "artistWork" ? "text-[#ffc176]" : "hover:text-[#ffc176]"
					}`}
					onClick={() => {
						setColor(currentBorderColor);
					}}
				>
					Artist Work
				</Link>
				<div className="inline md:hidden">|</div>
				<Link
					href={"/aboutMe"}
					className={`${
						screen === "aboutMe" ? "text-[#840032]" : "hover:text-[#840032]"
					}`}
					onClick={() => {
						setColor(currentBorderColor);
					}}
				>
					About Me
				</Link>
			</div>
			<div className="flex flex-col space-y-1">
				<button
					className="flex flex-row items-center"
					onClick={() => {
						navigator.clipboard.writeText("lazardesigns11@gmail.com");
						alert("Email copied");
					}}
				>
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
				<Link
					href={"https://www.linkedin.com/in/jackgreenwald/"}
					target="_blank"
				>
					<div>Made By Jack Greenwald</div>
				</Link>
			</div>
		</motion.div>
	);
}
