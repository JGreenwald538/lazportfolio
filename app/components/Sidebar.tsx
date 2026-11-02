"use client";

import Link from "next/link";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import useColor from "../use-color";
import { motion } from "motion/react";
import { Fragment, useEffect, useState } from "react";

const borderClasses: { [key: string]: string } = {
	artistWork: "#ffc176",
	posters: "#466995",
	albumcovers: "#ACD2ED",
	logoBranding: "#4C9459",
	aboutMe: "#CA352A",
	winona: "#9072D8",
	mockups: "#4FCCC9",
	home: "#F5F5F5",
	journal: "#E8D44D",
	contact: "#FF7A59",
};

const navLinks = [
	{ href: "/", label: "Home", screen: "home" },
	{ href: "/albumCovers", label: "Album Covers", screen: "albumcovers" },
	{ href: "/posters", label: "Posters", screen: "posters" },
	{ href: "/artistWork", label: "Artist Work", screen: "artistWork" },
	{ href: "/mockups", label: "Clothing and Mockups", screen: "mockups" },
	{ href: "/logobranding", label: "Logo & Branding", screen: "logoBranding" },
	{ href: "/winona", label: "Winona", screen: "winona" },
	{ href: "/journal", label: "Behind the Designs", screen: "journal" },
	{ href: "/aboutMe", label: "About Me", screen: "aboutMe" },
	{ href: "/contact", label: "Contact", screen: "contact" },
];

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
					href={"/"}
					onClick={() => {
						setColor(currentBorderColor);
					}}
				>
					<Image src={"/LDLogoRevise2-trim.png"} alt={"LazarDesigns logo"} width={400} height={400} className="object-contain" />
				</Link>
				<div className="text-xl md:ml-0 ml-2 md:mt-2 mt-5 font-bold font-outfit">
					Lazar
				</div>
				<div className="font-bold md:mt-0 mt-5 text-xl md:ml-0 ml-2">
					Racusin
				</div>
			</div>
			<nav className="md:grow md:flex md:flex-col flex-row justify-center md:items-start items-center w-full md:space-y-2 md:space-x-0 space-x-2 min-w-fit md:whitespace-nowrap whitespace-pre-wrap">
				{navLinks.map((link, index) => (
					<Fragment key={link.screen}>
						{index > 0 && <div className="inline md:hidden">|</div>}
						<Link
							href={link.href}
							style={{ "--accent": borderClasses[link.screen] } as React.CSSProperties}
							className={
								screen === link.screen ? "text-(--accent)" : "hover:text-(--accent)"
							}
							onClick={() => {
								setColor(currentBorderColor);
							}}
						>
							{link.label}
						</Link>
					</Fragment>
				))}
			</nav>
			<div className="flex flex-col space-y-1 mb-5">
				<Link
					href={"/contact"}
					className="bg-white px-2 py-1 rounded-md text-slate-950 font-semibold w-full hover:transform hover:scale-105 transition-transform duration-200 mb-2 text-center"
					onClick={() => {
						setColor(currentBorderColor);
					}}
				>
					Work With Me
				</Link>
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
			</div>
		</motion.div>
	);
}
