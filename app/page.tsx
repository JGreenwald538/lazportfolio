"use client";

import { useEffect, useRef, useState } from "react";
import ImagePoster from "./components/ImagePoster";
import Sidebar from "./components/Sidebar";
import FullscreenPosters from "./components/FullscreenPosters";
import Header from "./components/Header";

const images = [
	"shine.tracklist.2.jpg",
	"not.if.when.tracklist.jpg",
	"brownboy.02.jpg",
	"pressure.01 copy.jpg",
	"itllshine.3.jpg",
	"yachtside.2.jpg",
	"Born.Crash copy.jpg",
	"atlantis copy.jpg",
	"sun roof.jpg",
];

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [shownImage, setShownImage] = useState<
		string | { source: string; description: string | undefined }[]
	>(images[0]);
	const actionRef = useRef<VoidFunction | null>(null); // Use a ref to hold the latest action
	const imagePosters: React.JSX.Element[] = [];

	for (const image in images) {
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
				srcFolder="AlbumCovers"
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
			<Sidebar screen="albumcovers" />
			<div className="flex-col flex w-full items-center">
				<Header
					name="Album Covers"
					description="This is a collection of Client and Personal projects that express my
						love for music and creating something that portrays the music being
						presented."
				/>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-full h-fit my-8 align-center md:px-8">
					{imagePosters}
				</div>
			</div>
			{isOpen && (
				<FullscreenPosters
					srcFolder="AlbumCovers"
					shownImage={shownImage}
					setIsOpen={setIsOpen}
				/>
			)}
		</div>
	);
}
