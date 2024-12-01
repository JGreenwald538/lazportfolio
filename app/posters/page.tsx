"use client";

import { useState } from "react";
import ImagePoster from "../components/ImagePoster";
import Sidebar from "../components/Sidebar";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from "next/image";

const images = ["https://via.placeholder.com/600"];

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	return (
		<div className="flex flex-row">
			<Sidebar screen="posters" />
			<div className="grid grid-cols-3 gap-10 w-full h-fit mt-14 mx-10">
				<ImagePoster
					onClick={() => {
						setIsOpen(true);
					}}
				/>
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
			</div>
			{isOpen && (
				<div className="absolute">
					<div className="sticky w-screen h-screen px-24 py-10 top-0 z-20 ">
						<button
							onClick={() => {
								setIsOpen(false);
							}}
							className="w-screen h-screen -z-10 bg-black/80 absolute top-0 -ml-24"
						></button>
						<Image
							src={"/typography.png"}
							alt=""
							width={4000}
							height={4000}
							className="w-full h-full rounded-3xl border-2 border-white"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
