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
	aboutMe: "#CA352A",
	winona: "#9072D8",
	mockups: "#4FCCC9",
};

export default function Sidebar({ screen }: { screen: string }) {
	const currentBorderColor = borderClasses[screen] || "gray";
	const { color: previousBorderColor, setColor } = useColor();

	const getInitialState = (color: string, isDesktop: boolean) => {
		return isDesktop
			? { borderRightColor: color }
			: { borderBottomColor: color };
	};

	let isDesktop = false;

	if (typeof window !== "undefined") {
		isDesktop = window.matchMedia("(min-width: 768px)").matches;
	}

	const [initialState, setInitialState] = useState(() =>
		getInitialState(borderClasses[screen], isDesktop)
	);
	const [previousColorState, setPreviousColorState] = useState(() =>
		getInitialState(previousBorderColor, isDesktop)
	);

        useEffect(() => {
                if (typeof window !== "undefined") {
                        const mediaQuery = window.matchMedia("(min-width: 768px)");
                        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
                                const isDesktop = e.matches;
                                setInitialState(getInitialState(borderClasses[screen], isDesktop));
                                setPreviousColorState(getInitialState(previousBorderColor, isDesktop));
                        };

                        // Set initial states correctly on first render
                        setInitialState(
                                getInitialState(borderClasses[screen], mediaQuery.matches)
                        );
                        setPreviousColorState(
                                getInitialState(previousBorderColor, mediaQuery.matches)
                        );

                        // Listen for media query changes
                        mediaQuery.addEventListener("change", handleMediaQueryChange);

                        return () => {
                                mediaQuery.removeEventListener("change", handleMediaQueryChange);
                        };
                }
        }, [screen, previousBorderColor]);

	return (
		<motion.div
			className={`md:h-screen md:w-fit h-fit w-screen md:py-4 pb-4 pl-6 md:pr-6 flex flex-col sticky top-0 bg-slate-950 md:border-r-4 md:border-b-0 border-b-4 mr-0 z-10 font-outfit font-light`}
			initial={previousColorState}
			animate={initialState}
			transition={{ duration: 0.5 }}
		>
			<div className="flex md:flex-col flex-row mb-4 md:items-start items-center font-medium">
				<Link
					className="rounded-full border-white #border-2 w-15 h-15 flex justify-center items-center mt-5"
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
			<div className="md:grow md:flex md:flex-col flex-row justify-center md:items-start items-center w-full md:space-y-2 md:space-x-0 space-x-2 min-w-fit md:whitespace-nowrap whitespace-pre-wrap">
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
					href={"/mockups"}
					className={`${
						screen === "mockups" ? "text-[#4FCCC9]" : "hover:text-[#4FCCC9]"
					}`}
					onClick={() => {
						setColor(currentBorderColor);
					}}
				>
					Clothing and Mockups
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
					href={"/winona"}
					className={`${
						screen === "winona" ? "text-[#9072D8]" : "hover:text-[#9072D8]"
					}`}
					onClick={() => {
						setColor(currentBorderColor);
					}}
				>
					Winona
				</Link>
				<div className="inline md:hidden">|</div>
				<Link
					href={"/aboutMe"}
					className={`${
						screen === "aboutMe" ? "text-[#CA352A]" : "hover:text-[#CA352A]"
					}`}
					onClick={() => {
						setColor(currentBorderColor);
					}}
				>
					About Me
				</Link>
			</div>
			<div className="flex flex-col space-y-1 mb-5">
				<Link
					href={"https://shop.lazardesigns.com"}
					className="bg-[#e35050] px-2 py-1 rounded-md text-white font-semibold w-full hover:transform hover:scale-105 transition-transform duration-200 mb-2 text-center font-florencesans"
					target="_blank"
				>
					My Shop
				</Link>
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
