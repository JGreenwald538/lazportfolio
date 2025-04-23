"use client";

import Link from "next/link";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import useColor from "../use-color";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const borderClasses: { [key: string]: string } = {
	artistWork: "#ffc176",
	posters: "#466995",
	albumcovers: "#ACD2ED",
	logoBranding: "#4C9459",
	aboutMe: "#840032",
};

export default function Sidebar({ screen }: { screen: string }) {
	const currentBorderColor = borderClasses[screen] || "gray";
	const { color: previousBorderColor, setColor } = useColor();

	const getInitialState = (color: string, isDesktop: boolean) => {
		return isDesktop
			? { borderRightColor: color }
			: { borderBottomColor: color };
	};

	let mediaQuery: MediaQueryList 
	let isDesktop = false

	if (typeof window !== "undefined") {
		mediaQuery = window.matchMedia("(min-width: 768px)");
		isDesktop = mediaQuery.matches;
	}

	const [initialState, setInitialState] = useState(() =>
		getInitialState(borderClasses[screen], isDesktop)
	);
	const [previousColorState, setPreviousColorState] = useState(() =>
		getInitialState(previousBorderColor, isDesktop)
	);

	useEffect(() => {
		const handleMediaQueryChange = (e: MediaQueryListEvent) => {
			const isDesktop = e.matches;
			setInitialState(getInitialState(borderClasses[screen], isDesktop));
			setPreviousColorState(getInitialState(previousBorderColor, isDesktop));
		};

		// Set initial states correctly on first render
		setInitialState(getInitialState(borderClasses[screen], isDesktop));
		setPreviousColorState(getInitialState(previousBorderColor, isDesktop));

		// Listen for media query changes
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, [screen, previousBorderColor, isDesktop]);

	return (
		<motion.div
			className={`md:h-screen md:w-fit h-fit w-screen md:py-4 pb-4 pl-6 md:pr-6 flex flex-col sticky top-0 bg-slate-950 md:border-r-4 md:border-b-0 border-b-4 mr-0 z-10 font-outfit`}
			initial={previousColorState}
			animate={initialState}
			transition={{ duration: 0.5 }}
		>
			<div className="flex md:flex-col flex-row mb-4 md:items-start items-center font-semibold">
				<Link
					className="rounded-full border-white #border-2 w-[3.75rem] h-[3.75rem] flex justify-center items-center mt-5"
					href={"/aboutMe"}
					onClick={() => {
						setColor(currentBorderColor);
					}}
				>
					<Image src={"/logo.png"} alt={"Logo"} width={4000} height={4000} />
				</Link>
				<div className="text-xl md:ml-0 ml-2 md:mt-2 mt-5 font-bold font-outfit">
					Lazar
				</div>
				<div className="font-bold md:mt-0 mt-5 text-xl md:ml-0 ml-2">
					Racusin
				</div>
			</div>
			<div className="md:flex-grow md:flex md:flex-col flex-row justify-center md:items-start items-center w-full md:space-y-2 md:space-x-0 space-x-2 min-w-fit md:whitespace-nowrap whitespace-pre-wrap font-light">
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
