"use client";

import { useEffect, useRef, useState } from "react";
import ImagePoster from "../components/ImagePoster";
import Sidebar from "../components/Sidebar";
import FullscreenPosters from "../components/FullscreenPosters";
import Header from "../components/Header";

const images = [
	{
		source: "Artboard.8.2insta.jpg",
		description:
			"This is a personal branding project that was designed for a fictional food truck business. Using Adobe Illustrator and then Photoshop for the mockups, I created a simple brand package for Urban Bites.",
	},
	{ source: "Artboard.8.3insta.jpg", description: undefined },
	{ source: "Artboard.8.insta.jpg", description: undefined },
];

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [shownImage, setShownImage] = useState(images[0].source);
	const actionRef = useRef<VoidFunction | null>(null); // Use a ref to hold the latest action
	const imagePosters: React.JSX.Element[] = [];
	interface FullscreenPostersMap {
		[key: string]: JSX.Element;
	}
	const fullscreenPosters: FullscreenPostersMap = {};
	for (const image in images) {
		fullscreenPosters[images[image].source] = (
			<FullscreenPosters
				srcFolder="LogoBranding"
				shownImage={images[image].source}
				setIsOpen={setIsOpen}
				description={images[image].description}
			/>
		);
	}

	for (const image in images) {
		imagePosters.push(
			<ImagePoster
				imageSource={images[image].source}
				key={image}
				onClick={() => {
					setIsOpen(true);
					const closing = () => {
						setIsOpen(false);
					};
					actionRef.current = closing;
					setShownImage(images[image].source);
				}}
				srcFolder="LogoBranding"
			></ImagePoster>
		);
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
					description="Concept designs for fictional companies and brands"
				/>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full h-fit my-8 md:mx-10 align-center md:px-8">
					{imagePosters}
				</div>
			</div>
			{isOpen &&
				fullscreenPosters[shownImage]}
		</div>
	);
}
