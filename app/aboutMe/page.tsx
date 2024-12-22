import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex md:flex-row flex-col md:justify-normal items-center">
			<Sidebar screen="aboutMe" />
			<Image
				src={"/aboutMePic.jpeg"}
				alt={"pic"}
				width={4000}
				height={4000}
				className="object-scale-down md:w-1/3 w-3/4 md:ml-10 md:mt-0 mt-6"
			/>
			<div className="md:ml-8 md:my-0 my-4 md:h-screen flex flex-col justify-center md:w-1/3 w-3/4 md:items-baseline items-center">
				<div className="font-semibold mb-4">
					{`Laz is currently a student at Rochester Institute of Technology (RIT). Studying Advertising and Public Relations`}
				</div>
				<div>
					{`With his love for creating graphics and posters, Laz created a freelance business “LazarDesigns” to showcase his client and personal projects. Enjoying music all his life, Laz loves to collaborate with artists ranging from album art for rap to rock. Starting with creating posters for local events, to creating album covers for verified artists, Laz is continuously growing his design skills and business ventures.`}
				</div>
				<Link
					className="mt-4 text-blue-400"
					href={"https://www.linkedin.com/in/lazar-racusin/"}
					target="_blank"
				>
					<Image
						src={"/LinkedIn_2021.svg.png"}
						alt={"LinkedIn Logo"}
						width={4000}
						height={4000}
						className="object-scale-down w-24"
					/>
				</Link>
				<Link className="mt-4 text-blue-400" href={"/resume"} target="_blank">
					View Resume
				</Link>
				<div className="mt-4 text-blue-400">
					<a href="/resume.pdf" download>
						Download Resume
					</a>
				</div>
			</div>
		</div>
	);
}
