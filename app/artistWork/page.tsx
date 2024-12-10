"use client";

import { useEffect, useRef, useState } from "react";
import ImagePoster from "../components/ImagePoster";
import Sidebar from "../components/Sidebar";
import Image from "next/image";

const images = [
	"because.internet.04.jpg",
	"Chroma mirror 4.jpg",
	"Chroma.green.2.jpg",
	"florida.queen.bee.beige.jpg",
	"florida.queen.bee.purple.jpg",
	"not if bridge green 1.jpg",
	"poster.utopia.02.jpg",
	"rockman.jpg",
	"Shine.Poster.1.jpg",
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
		<div className="flex flex-row">
			<Sidebar screen="artistWork" />
			<div className="grid md:grid-cols-3 grid-cols-1 gap-10 w-full h-fit my-8 mx-10 align-center">
				{imagePosters}
			</div>
			{isOpen && (
				<div className="absolute">
					<div className="fixed w-screen h-screen px-24 py-10 top-0 z-20 ">
						<button
							onClick={() => {
								setIsOpen(false);
							}}
							className="w-screen h-screen -z-10 bg-black/80 absolute top-0 -ml-24"
						></button>
						<Image
							src={"/ArtistWork/" + shownImage}
							alt=""
							width={10000}
							height={10000}
							className="w-fit h-fit max-h-screen max-w-screen-sm rounded-3xl border-2 border-white object-scale-down mx-auto my-auto"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
