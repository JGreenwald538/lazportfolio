"use client";

import { useEffect, useRef, useState } from "react";
import ImagePoster from "../components/ImagePoster";
import Sidebar from "../components/Sidebar";
import FullscreenPosters from "../components/FullscreenPosters";

const images = [
	"Chroma mirror 4.jpg",
	"florida.queen.bee.purple.jpg",
	"florida.queen.bee.beige.jpg",
	"rockman.jpg",
	"Shine.Poster.1.jpg",
	"because.internet.04.jpg",
	"poster.utopia.02.jpg",
	"not if bridge green 1.jpg",
	"Chroma.green.2.jpg",
	"Ashine.vinyl.1.jpg",
	"Bbrownboy.ig.2.jpg",
	"Cboth.ways.poster.mockup2.jpg",
	"Dswingers.mockup.jpg",
	"EPressure.Vinyl.jpg",
	"Fbrownboy.ig.1.jpg"
];

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [shownImage, setShownImage] = useState(images[0]);
	const actionRef = useRef<VoidFunction | null>(null); // Use a ref to hold the latest action
	const imagePosters: React.JSX.Element[] = [];

	for (const image in images) {
		imagePosters.push(
			<ImagePoster
				imageSource={"/ArtistWork/" + images[image]}
				key={image}
				onClick={() => {
					setIsOpen(true);
					const closing = () => {
						setIsOpen(false);
					};
					actionRef.current = closing;
					setShownImage(images[image]);
					console.log("/ArtistWork/" + shownImage);
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
			<Sidebar screen="artistWork" />
			<div className="grid md:grid-cols-3 grid-cols-1 gap-10 w-full h-fit my-8 md:mx-10 align-center">
				{imagePosters}
			</div>
			{isOpen && (
				<FullscreenPosters
					srcFolder="ArtistWork"
					shownImage={shownImage}
					setIsOpen={setIsOpen}
				/>
			)}
		</div>
	);
}
