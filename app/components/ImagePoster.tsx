import Image from "next/image";

export default function Home({onClick, imageSource}: {onClick?: VoidFunction, imageSource?: string }) {
	return (
		<div className="rounded border-white border-2 h-96 w-fit mx-auto">
			<button className="w-fit h-full hover:opacity-80" onClick={onClick}>
				<Image
					src={imageSource || "/typography.png"}
					alt={""}
					width={300}
					height={300}
					className="w-fit h-full object-scale-down"
				></Image>
			</button>
		</div>
	);
}
