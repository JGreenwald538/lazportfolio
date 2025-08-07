"use client";

import { useEffect, useRef, useState } from "react";
import ImagePoster from "../components/ImagePoster";
import Sidebar from "../components/Sidebar";
import FullscreenPosters from "../components/FullscreenPosters";
import Header from "../components/Header";
import { source } from "motion/react-client";

const images = [
	[
		{
			source: "Artboard.8.2insta.jpg",
			description:
				"This is a personal branding project that was designed for a fictional food truck business. Using Adobe Illustrator and then Photoshop for the mockups, I created a simple brand package for Urban Bites. I used the attributes of the “U” to look like a toothpick to represent the food aspect of the business, and had the “B” symbolize a truck for its “on-the-go” experience. The pattern that goes along with the logo ties together its modern and fun style and gives the consumer a reason to walk up to the truck and try out their signature meals.",
		},
		{
			source: "Artboard.8.3insta.jpg",
			description:
				"This is a personal branding project that was designed for a fictional food truck business. Using Adobe Illustrator and then Photoshop for the mockups, I created a simple brand package for Urban Bites. I used the attributes of the “U” to look like a toothpick to represent the food aspect of the business, and had the “B” symbolize a truck for its “on-the-go” experience. The pattern that goes along with the logo ties together its modern and fun style and gives the consumer a reason to walk up to the truck and try out their signature meals.",
		},
		{
			source: "Artboard.8.insta.jpg",
			description:
				"This is a personal branding project that was designed for a fictional food truck business. Using Adobe Illustrator and then Photoshop for the mockups, I created a simple brand package for Urban Bites. I used the attributes of the “U” to look like a toothpick to represent the food aspect of the business, and had the “B” symbolize a truck for its “on-the-go” experience. The pattern that goes along with the logo ties together its modern and fun style and gives the consumer a reason to walk up to the truck and try out their signature meals.",
		},
	],
	[
		{
			source: "Instagram Post Mockup 2023 (1) copy.jpg",
			description:
				"This was a branding project for a logo competition that required me to come up with an original idea for a food product. Sweet Royalty has a modern and simple approach to chocolate that shows elegance in an affordable sweet. I had a fun time making the chocolate bar mockups and pattern to go along with it.",
		},
		{
			source: "SR.Candybar.1.jpg",
			description:
				"This was a branding project for a logo competition that required me to come up with an original idea for a food product. Sweet Royalty has a modern and simple approach to chocolate that shows elegance in an affordable sweet. I had a fun time making the chocolate bar mockups and pattern to go along with it.",
		},
		{
			source: "SR.Candybar.2.jpg",
			description:
				"This was a branding project for a logo competition that required me to come up with an original idea for a food product. Sweet Royalty has a modern and simple approach to chocolate that shows elegance in an affordable sweet. I had a fun time making the chocolate bar mockups and pattern to go along with it.",
		},
		{
			source: "SR.Pattern-100.jpg",
			description:
				"This was a branding project for a logo competition that required me to come up with an original idea for a food product. Sweet Royalty has a modern and simple approach to chocolate that shows elegance in an affordable sweet. I had a fun time making the chocolate bar mockups and pattern to go along with it.",
		},
	],
	[
		{
			source: "1palm.side.tampa.png",
			description:
				"These logos were for the University of Tampa logo submission. They were ultimately not picked to be used but it was a fun experience to design a soccer logo that incorporated the college’s brand and identity. The multiple variations were meant for different parts of the team’s uniform, merchandise, and overall equipment.",
		},
		{
			source: "1palm.tampa.png",
			description:
				"These logos were for the University of Tampa logo submission. They were ultimately not picked to be used but it was a fun experience to design a soccer logo that incorporated the college’s brand and identity. The multiple variations were meant for different parts of the team’s uniform, merchandise, and overall equipment.",
		},
		{
			source: "2palm.tampa.png",
			description:
				"These logos were for the University of Tampa logo submission. They were ultimately not picked to be used but it was a fun experience to design a soccer logo that incorporated the college’s brand and identity. The multiple variations were meant for different parts of the team’s uniform, merchandise, and overall equipment.",
		},
	],
	[
		{ source: "SigchiEnvyVert.png", description: undefined },
		{ source: "Envy beige-100.jpg", description: undefined },
	],
	[
		{ source: "not.if.when beiigeee.png", description: undefined },
		{ source: "not.if.when text transp.png", description: undefined },
		{ source: "not.if.when.garamond.png", description: undefined },
	],
	[
		{ source: "Horizontal - White.png", description: undefined },
		{ source: "Seek Slogan-100.jpg", description: undefined },
		{ source: "Seek Variations-100.jpg", description: undefined },
		{ source: "Symbol - Black.png", description: undefined },
		{ source: "Symbol - Color.png", description: undefined },
		{ source: "Vertical - Black_1.png", description: undefined },
		{ source: "Vertical - Black.png", description: undefined },
		{ source: "Vertical - Color.png", description: undefined },
		{ source: "Vertical - White.png", description: undefined },
	],
];

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [shownImage, setShownImage] = useState(images[0]);
	const actionRef = useRef<VoidFunction | null>(null); // Use a ref to hold the latest action
	const imagePosters: React.JSX.Element[] = [];

	for (const image in images) {
		if (typeof images[image] == "string") {
			imagePosters.push(
				<ImagePoster
					imageSource={images[image]}
					key={image}
					onClick={() => {
						setIsOpen(true);
						const closing = () => {
							setIsOpen(false);
						};
						actionRef.current = closing;
						setShownImage(images[image]);
					}}
					srcFolder="LogoBranding"
				></ImagePoster>
			);
		} else if (typeof images[image] == "object") {
			imagePosters.push(
				<ImagePoster
					imageSource={images[image]}
					key={image}
					onClick={() => {
						setIsOpen(true);
						const closing = () => {
							setIsOpen(false);
						};
						actionRef.current = closing;
						setShownImage(images[image]);
					}}
					srcFolder="LogoBranding"
				></ImagePoster>
			);
		}
	}

	useEffect(() => {
		function onKeyup(e: { key: string }) {
			if (e.key === "Escape" && actionRef.current) {
				actionRef.current();
			}
		}

		window.addEventListener("keyup", onKeyup);
		return () => window.removeEventListener("keyup", onKeyup);
	}, []);

	return (
		<div className="flex md:flex-row flex-col">
			<Sidebar screen="logoBranding" />
			<div className="flex flex-col w-full items-center">
				<Header
					name="Logo & Branding"
					description="A collection of logo and branding projects from competitions and personal work. Each project is a unique representation of a brand's identity, with attention to detail and a focus on visual storytelling with use of Adobe products."
				/>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full h-fit my-8 md:mx-10 align-center md:px-8">
					{imagePosters}
				</div>
			</div>
			{isOpen && (
				<FullscreenPosters
					srcFolder="LogoBranding"
					shownImage={shownImage}
					setIsOpen={setIsOpen}
					description={shownImage[0].description}
					logoandBranding
				/>
			)}
		</div>
	);
}
