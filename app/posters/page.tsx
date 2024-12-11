"use client";

import { useEffect, useRef, useState } from "react";
import ImagePoster from "../components/ImagePoster";
import Sidebar from "../components/Sidebar";
import Image from "next/image";

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
	"look.both.ways.jpg",
	"NRA.Ad.04.jpg",
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
				<div className="absolute">
					<div className="fixed w-screen h-screen px-24 py-10 top-0 z-20 flex items-center justify-center">
						<button
							onClick={() => {
								setIsOpen(false);
							}}
							className="w-screen h-screen -z-10 bg-black/80 absolute top-0 "
						></button>
						<Image
							src={"/Posters/" + shownImage}
							alt=""
							width={10000}
							height={10000}
							className="w-fill h-fill max-h-[90vh] max-w-screen-sm rounded-3xl border-2 border-white object-scale-down"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
