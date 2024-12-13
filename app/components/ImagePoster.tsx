import Image from "next/image";

export default function Home({onClick, imageSource}: {onClick?: VoidFunction, imageSource?: string | {source: string, description: string | undefined}[] }) {
	return (
		<div className="rounded border-white border-2 h-96 w-fit mx-auto">
			<button className="w-fit h-full hover:opacity-80" onClick={onClick}>
				{typeof imageSource === "string" && (
					<Image
						src={imageSource || "/typography.png"}
						alt={""}
						width={300}
						height={300}
						className="w-fit h-full object-scale-down"
					></Image>
				)}
				{typeof imageSource === "object" && (
					<Image
						src={imageSource[0].source || "/typography.png"}
						alt={""}
						width={300}
						height={300}
						className="w-fit h-full object-scale-down"
					></Image>
				)}
				{typeof imageSource === "object" && (
					<Image
						src={"/galleryViewIcon.png"}
						alt={"Gallery View Icon"}
						width={4000}
						height={4000}
						className="relative bottom-16 object-scale-down w-16 opacity-80"
					></Image>
				)}
			</button>
		</div>
	);
}
