import Link from "next/link";

export default function Home() {
	return (
		<div className="h-screen w-fit border-r-yellow-400 border-r-2 py-4 pl-4 pr-10 flex flex-col sticky top-0 bg-slate-900">
			<div className="flex flex-col mb-4">
				<div className="rounded-full border-white border-2 w-20 h-20 flex justify-center items-center">
					Logo
				</div>
				<div className="text-xl">Laz</div>
				<div className="text-xl">Racusin</div>
			</div>
			<div className="flex-grow flex flex-col justify-center items-start space-y-2">
				<Link href={"/"}>Typography</Link>
				<Link href={"/albumworks"}>Album Work</Link>
				<Link href={"/posters"}>Posters</Link>
			</div>
		</div>
	);
}
