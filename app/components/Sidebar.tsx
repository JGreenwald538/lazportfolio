import Link from "next/link";
import Image from "next/image";

const borderClasses: { [key: string]: string } = {
	artistWork: "border-r-[#ffc176]",
	posters: "border-r-[#466995]",
	albumcovers: "border-r-[#ACD2ED]",
	logoBranding: "border-r-[#4C9459]",
	aboutMe: "border-r-[#840032]",
};

export default function Sidebar({ screen }: { screen: string }) {
	const borderClass = borderClasses[screen] || "border-r-gray-400";
	console.log(screen)
	return (
		<div
			className={`h-screen w-fit ${borderClass} py-4 pl-6 pr-12 flex flex-col sticky top-0 bg-slate-950 border-r-4 mr-4 `}
		>
			<div className="flex flex-col mb-4">
				<Link className="rounded-full border-white #border-2 w-[3.75rem] h-[3.75rem] flex justify-center items-center mt-5" href={"/aboutMe"}>
					<Image src={"/logo.png"} alt={"Logo"} width={4000} height={4000} />
				</Link>
				<div className="text-xl mt-2 font-bold">Lazar</div>
				<div className="font-bold text-xl">Racusin</div>
			</div>
			<div className="flex-grow flex flex-col justify-center items-start space-y-2 min-w-fit whitespace-nowrap">
				<Link
					href={"/albumcovers"}
					className={`${
						screen === "albumcovers" ? "text-[#ACD2ED]" : "hover:text-[#ACD2ED]"
					}`}
				>
					Album Covers
				</Link>
				<Link
					href={"/posters"}
					className={`${
						screen === "posters" ? "text-[#466995]" : "hover:text-[#466995]"
					}`}
				>
					Posters
				</Link>
				<Link
					href={"/"}
					className={`${
						screen === "logoBranding"
							? "text-[#4C9459]"
							: "hover:text-[#4C9459]"
					}`}
				>
					Logo & Branding
				</Link>
				<Link
					href={"/artistWork"}
					className={`${
						screen === "artistWork" ? "text-[#ffc176]" : "hover:text-[#ffc176]"
					}`}
				>
					Artist Work
				</Link>
				<Link
					href={"/aboutMe"}
					className={`${
						screen === "aboutMe" ? "text-[#840032]" : "hover:text-[#840032]"
					}`}
				>
					About Me
				</Link>
			</div>
		</div>
	);
}
