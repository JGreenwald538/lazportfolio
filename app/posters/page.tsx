"use client";

import { useEffect, useRef, useState } from "react";
import ImagePoster from "../components/ImagePoster";
import Sidebar from "../components/Sidebar";
import FullscreenPosters from "../components/FullscreenPosters";

const images = [
	"bad.pollen.04.jpg",
	"Duolingo.horror.green.jpg",
	"Duolingo.horror.red.2.jpg",
	"Duolingo.horror.vintage.2.jpg",
	"face.demons.black.jpg",
	"face.demons.halfred.jpg",
	"face.demons.RED.jpg",
	"geico.car.ad.03.jpg",
	"hikingvwalking copy.jpg",
	"look.both.ways.2.jpg",
	"NRA.Ad.03.jpg",
	"Sharp.Cactus.16.jpg",
	"skiers.16.ets.jpg",
	"thathill.design2.jpg",
	"trysleeping.02.jpg",
	"Unknown.16.ets.jpg",
	"walk.the.walk.2.jpg",
	"walk.the.walk.jpg",
	"yellowstone.simple2.jpg",
];


export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [shownImage, setShownImage] = useState(images[0]);
	const actionRef = useRef<VoidFunction | null>(null); // Use a ref to hold the latest action
	const imagePosters: React.JSX.Element[] = [];

	for (const image in images) {
		imagePosters.push(
			<ImagePoster
				imageSource={"/Posters/" + images[image]}
				key={image}
				onClick={() => {
					setIsOpen(true);
					const closing = () => {
						setIsOpen(false);
					};
					actionRef.current = closing;
					setShownImage(images[image]);
					console.log("/Posters/" + shownImage);
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
			<Sidebar screen="posters" />
			<div className="grid md:grid-cols-3 grid-cols-1 gap-10 w-full h-fit my-8 mx-10 align-center">
				{imagePosters}
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
