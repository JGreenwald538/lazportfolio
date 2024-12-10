import Link from "next/link";
import Image from "next/image";

const borderClasses: { [key: string]: string } = {
	typography: "border-r-yellow-400",
	albumWork: "border-r-red-400",
	posters: "border-r-blue-400",
};

export default function Sidebar({ screen }: { screen: string }) {
	const borderClass = borderClasses[screen] || "border-r-gray-400";

	return (
		<div
			className={`h-screen w-fit ${borderClass} py-4 pl-6 pr-12 flex flex-col sticky top-0 bg-slate-950 border-r-4 mr-4 `}
		>
			<div className="flex flex-col mb-4">
				<div className="rounded-full border-white #border-2 w-20 h-20 flex justify-center items-center">
					<Image src={"/logo.png"} alt={"Logo"} width={4000} height={4000} />
				</div>
				<div className="text-xl mt-4">Laz</div>
				<div className="text-xl">Racusin</div>
			</div>
			<div className="flex-grow flex flex-col justify-center items-start space-y-2 min-w-fit whitespace-nowrap">
				<Link
					href={"/albumcovers"}
					className={`${screen === "albumWorks" ? "" : "hover:"}text-[#d7dace]`}
				>
					Album Covers
				</Link>
				<Link
					href={"/posters"}
					className={`${screen === "posters" ? "" : "hover:"}text-[#ffe9b3]`}
				>
					Posters
				</Link>
				<Link
					href={"/"}
					className={`${
						screen === "logoBranding" ? "" : "hover:"
					}text-[#ffdc74]`}
				>
					Logo & Branding
				</Link>
				<Link
					href={"/artistWork"}
					className={`${screen === "artistWork" ? "" : "hover:"}text-[#ffc176]`}
				>
					Artist Work
				</Link>
				<Link
					href={"/aboutMe"}
					className={`${screen === "aboutMe" ? "" : "hover:"}text-[#9b9b7a]`}
				>
					About Me
				</Link>
			</div>
		</div>
	);
}
