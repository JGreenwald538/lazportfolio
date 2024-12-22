"use client";

import { useEffect, useRef, useState } from "react";
import ImagePoster from "../components/ImagePoster";
import Sidebar from "../components/Sidebar";
import FullscreenPosters from "../components/FullscreenPosters";
import Header from "../components/Header";

const images = [
	"bad.pollen.04.jpg",
	"geico.car.ad.03.jpg",
	"look.both.ways.jpg",
	[
		{ source: "Duolingo.horror.green.jpg", description: undefined },
		{ source: "Duolingo.horror.red.2.jpg", description: undefined },
		{ source: "Duolingo.horror.vintage.2.jpg", description: undefined },
	],
	"NRA.Ad.03.jpg",
	[
		{ source: "face.demons.RED.jpg", description: undefined },
		{ source: "face.demons.halfred.jpg", description: undefined },
		{ source: "face.demons.black.jpg", description: undefined },
	],
	"Unknown.16.ets.jpg",
	"skiers.16.ets.jpg",
	"thathill.design2.jpg",
	"hikingvwalking copy.jpg",
	"Sharp.Cactus.16.jpg",
	"trysleeping.02.jpg",
	[
		{ source: "walk.the.walk.jpg", description: undefined },
		{ source: "walk.the.walk.2.jpg", description: undefined },
	],
	"yellowstone.simple2.jpg",
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
					srcFolder="Posters"
				></ImagePoster>
			);
		} else {
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
					srcFolder="Posters"
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
			<Sidebar screen="posters" />
			<div className="flex flex-col">
				<Header
					name="Posters"
					description="Sometimes a funny idea pops into my head and these posters are the result of that. The hardest part is finding the font."
				/>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full h-fit my-8 md:mx-10 align-center">
					{imagePosters}
				</div>
			</div>
			{isOpen && (
				<FullscreenPosters
					srcFolder="Posters"
					shownImage={shownImage}
					setIsOpen={setIsOpen}
				/>
			)}
		</div>
	);
}
