import Image from "next/image";
import { useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";


export default function FullscreenPosters({
	srcFolder,
	shownImage,
	setIsOpen,
	description,
}: {
	srcFolder: string;
	shownImage: string | { source: string; description: string | undefined }[];
	setIsOpen: (arg0: boolean) => void;
	description?: string;
}) {
	const [currentImage, setCurrentImage] = useState(0)
	return (
		<div className="absolute">
			<div className="fixed w-screen h-screen px-24 py-10 top-0 z-20 flex items-center justify-center">
				<button
					onClick={() => {
						setIsOpen(false);
					}}
					className="w-screen h-screen -z-10 bg-black/80 absolute top-0"
				></button>
				<div className="flex md:flex-row flex-col items-center">
					<Image
						src={
							"/" +
							srcFolder +
							"/" +
							(typeof shownImage == "string"
								? shownImage
								: shownImage[currentImage].source)
						}
						alt=""
						width={10000}
						height={10000}
						className="w-fill h-fill max-h-[90vh] max-w-[90vw] rounded-xl object-scale-down"
					/>
					{description && (
						<div className="p-2 h-fit md:w-1/2 w-3/4 md:ml-10 md:text-3xl md:mt-0 mt-10 text-md border-white rounded-md border-2">
							{description}
						</div>
					)}
					<button
						onClick={() => {
							setIsOpen(false);
						}}
						className="w-fill h-fill -z-10 absolute top-0"
					></button>
				</div>
				{typeof shownImage === "object" && currentImage > 0 && (
					<button
						className="absolute w-12 left-12 md:bottom-auto bottom-44 "
						onClick={() => {
							setCurrentImage(currentImage - 1);
						}}
					>
						<FaCircleChevronLeft size={30} />
					</button>
				)}
				{typeof shownImage === "object" &&
					currentImage < shownImage.length - 1 && (
						<button
							className="absolute w-12 right-12 md:bottom-auto bottom-44"
							onClick={() => {
								setCurrentImage(currentImage + 1);
							}}
						>
							<FaCircleChevronRight size={30} />
						</button>
					)}
			</div>
		</div>
	);
}
