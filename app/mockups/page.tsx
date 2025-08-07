"use client";

import { useEffect, useRef, useState } from "react";
import FullscreenPosters from "../components/FullscreenPosters";
import ImagePoster from "../components/ImagePoster";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const images = [
	{ source: "AAKendrickMock.png", description: undefined },
	{ source: "AApassionshirt mock2.png", description: undefined },
	{ source: "ABACKpassionshirt mock.png", description: undefined },
	{ source: "Ashine.vinyl.1.jpg", description: undefined },
	{ source: "BAchromaposter mock.png", description: undefined },
	{ source: "BCIMG_4527.jpeg", description: undefined },
	{ source: "Cboth ways poster mockup2.jpg", description: undefined },
	{ source: "Cbrownboy.ig.2 copy.jpg", description: undefined },
	{ source: "EPressure Vinyl.jpg", description: undefined },
	{ source: "Fbrownboy.ig.1 copy.jpg", description: undefined },
	{ source: "Gswingers.mockup.jpg", description: undefined },
];

export default function MockupPage() {
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
				srcFolder="ClothingMockups"
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
				srcFolder="ClothingMockups"
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
		<div className="flex flex-row min-h-screen w-full">
			<Sidebar screen="mockups" />
			<div className="flex flex-col w-full items-center">
				<Header name="Clothing and Mockups" description="" />
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full h-fit my-8 md:mx-10 align-center md:px-8">
					{imagePosters}
				</div>
			</div>
			{isOpen && fullscreenPosters[shownImage]}
		</div>
	);
}
