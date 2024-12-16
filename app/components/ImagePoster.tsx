import Image from "next/image";

export default function Home({
	onClick,
	imageSource,
	srcFolder,
}: {
	onClick?: VoidFunction;
	imageSource?: string | { source: string; description: string | undefined }[];
	srcFolder: string;
}) {
	return (
		<div className="rounded border-white border-2 h-96 w-fit mx-auto">
			<button
				className="w-fit h-full hover:opacity-80 relative"
				onClick={onClick}
			>
				{typeof imageSource === "string" && (
					<Image
						src={`/${srcFolder}/${imageSource}` || "/typography.png"}
						alt=""
						width={300}
						height={300}
						className="w-fit h-full object-scale-down"
					/>
				)}
				{typeof imageSource === "object" && (
					<>
						{/* Shadow Image */}
						<Image
							src={
								`/${srcFolder}/${imageSource[1].source}` || "/typography.png"
							}
							alt=""
							width={300}
							height={300}
							className="w-fit h-full object-scale-down absolute top-0 left-0 opacity-30 rounded-md translate-x-4 translate-y-4"
						/>
						{/* Main Image */}
						<Image
							src={
								`/${srcFolder}/${imageSource[0].source}` || "/typography.png"
							}
							alt=""
							width={300}
							height={300}
							className="w-fit h-full object-scale-down hover:drop-shadow-xl relative"
						/>
					</>
				)}
			</button>
		</div>
	);
}
