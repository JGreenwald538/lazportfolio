import Image from "next/image";

export default function Home() {
	return (
		<div className="rounded border-white border-2 h-96">
			<button className="w-full h-full hover:opacity-80">
				<Image
					src={"/typography.png"}
					alt={""}
					width={300}
					height={300}
					className="w-full h-full"
				></Image>
			</button>
		</div>
	);
}