"use client";

import { useEffect, useRef, useState } from "react";
import ImagePoster from "../components/ImagePoster";
import Sidebar from "../components/Sidebar";
import FullscreenPosters from "../components/FullscreenPosters";

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
	const [description, setDescription] = useState<string | undefined>(undefined);

	for (const image in images) {
		imagePosters.push(
			<ImagePoster
				imageSource={"/LogoBranding/" + images[image].source}
				key={image}
				onClick={() => {
					setIsOpen(true);
					const closing = () => {
						setIsOpen(false);
					};
					actionRef.current = closing;
					setShownImage(images[image].source);
					setDescription(images[image].description);
				}}
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
			<div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:w-full h-fit my-8 mx-10 align-center">
				{imagePosters}
			</div>
			{isOpen && (
				<FullscreenPosters
					srcFolder="LogoBranding"
					shownImage={shownImage}
					setIsOpen={setIsOpen}
					description={description}
				/>
			)}
		</div>
	);
}
