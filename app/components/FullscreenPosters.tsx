import Image from "next/image";

export default function FullscreenPosters({
	srcFolder,
	shownImage,
	setIsOpen,
	description,
}: {
	srcFolder: string;
	shownImage: string;
	setIsOpen: (arg0: boolean) => void;
	description?: string;
}) {
	return (
		<div className="absolute">
			<div className="fixed w-screen h-screen px-24 py-10 top-0 z-20 flex items-center justify-center">
				<button
					onClick={() => {
						setIsOpen(false);
					}}
					className="w-screen h-screen -z-10 bg-black/80 absolute top-0"
				></button>
				<div className="flex flex-row items-center">
					<Image
						src={"/" + srcFolder + "/" + shownImage}
						alt=""
						width={10000}
						height={10000}
						className="w-fill h-fill max-h-[90vh] max-w-screen-sm rounded-xl object-scale-down"
					/>
					{description && (
						<div className="p-2 h-fit w-1/2 ml-10 text-3xl border-white rounded-md border-2">
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
			</div>
		</div>
	);
}
