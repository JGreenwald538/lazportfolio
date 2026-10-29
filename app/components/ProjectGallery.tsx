"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import FullscreenPosters from "./FullscreenPosters";
import type { ProjectImage } from "../data/featured";

export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
	const [shownImage, setShownImage] = useState<ProjectImage | null>(null);

	useEffect(() => {
		function onKeyup(e: { key: string }) {
			if (e.key === "Escape") {
				setShownImage(null);
			}
		}

		window.addEventListener("keyup", onKeyup);
		return () => window.removeEventListener("keyup", onKeyup);
	}, []);

	return (
		<>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-start">
				{images.map((image) => (
					<button
						key={image.file}
						className="rounded-lg overflow-hidden border-2 border-white/20 hover:border-white transition-colors"
						onClick={() => setShownImage(image)}
					>
						<Image
							src={`/${image.folder}/${image.file}`}
							alt={image.alt}
							width={1200}
							height={1500}
							className="w-full h-auto"
						/>
					</button>
				))}
			</div>
			{shownImage && (
				<FullscreenPosters
					srcFolder={shownImage.folder}
					shownImage={shownImage.file}
					setIsOpen={() => setShownImage(null)}
				/>
			)}
		</>
	);
}
