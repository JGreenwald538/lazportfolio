import Image from "next/image";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import CtaLink from "./components/CtaLink";
import { FaChevronDown } from "react-icons/fa";
import FadeInSection from "./components/FadeInComponent";
import { featuredProjects } from "./data/featured";

export default function Home() {
	return (
		<div className="flex md:flex-row flex-col">
			<Sidebar screen="home" />
			<main className="flex flex-col w-full">
				<section className="relative md:min-h-[85vh] flex flex-col justify-center px-6 md:px-16 py-12">
					<div className="font-outfit uppercase tracking-widest text-sm text-white/60 mb-4">
						Graphic Designer · Creative Marketer · RIT Advertising & PR
					</div>
					<h1 className="font-outfit font-bold text-4xl md:text-6xl leading-tight text-balance max-w-4xl">
						Design that makes music, brands, and ideas impossible to ignore.
					</h1>
					<p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
						{`I'm Lazar Racusin, a designer who creates album covers, posters, and brand identities that turn an idea into something people remember with 20+ projects under my belt. I'm looking to work with brands, artists, and marketing teams who want creative that connects with their audience and drives results.`}
					</p>
					<div className="mt-8 flex flex-wrap gap-4">
						<CtaLink href="/albumCovers">View My Portfolio</CtaLink>
						<CtaLink href="/contact" variant="secondary">
							Work With Me
						</CtaLink>
					</div>
					<a
						href="#featured-heading"
						aria-label="Scroll to featured work"
						className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors animate-bounce md:block hidden"
					>
						<FaChevronDown size={28} />
					</a>
				</section>

				<section className="px-6 md:px-16 pb-16 scroll-mt-8" aria-labelledby="featured-heading">
					<h2
						id="featured-heading"
						className="font-outfit font-semibold text-3xl mb-8"
					>
						Featured Work
					</h2>
					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
						{featuredProjects.map((project) => (
							<FadeInSection key={project.slug}>
								<Link
									href={`/projects/${project.slug}`}
									className="group flex flex-col h-full rounded-lg border-2 border-white/20 hover:border-white overflow-hidden transition-colors"
								>
									<div className="relative aspect-[4/5] bg-black">
										<Image
											src={`/${project.cover.folder}/${project.cover.file}`}
											alt={project.cover.alt}
											fill
											sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
											className="object-cover group-hover:scale-105 transition-transform duration-500"
										/>
									</div>
									<div className="flex flex-col grow p-5">
										<div className="text-sm text-white/60">
											{project.category}
										</div>
										<h3 className="font-outfit font-semibold text-2xl mt-1">
											{project.title}
										</h3>
										<p className="mt-3 text-white/80 grow">
											{project.summary}
										</p>
										<div className="mt-4 font-semibold group-hover:underline">
											Read the case study →
										</div>
									</div>
								</Link>
							</FadeInSection>
						))}
					</div>
				</section>

				<FadeInSection className="px-6 md:px-16 pb-20">
					<section className="flex md:flex-row flex-col items-center gap-10 rounded-lg bg-white/5 p-8">
						<Image
							src="/headshot.jpg"
							alt="Portrait of Lazar Racusin"
							width={1200}
							height={1600}
							className="md:w-1/4 w-2/3 rounded-lg object-cover"
						/>
						<div className="flex flex-col">
							<h2 className="font-outfit font-semibold text-3xl">
								Hi, I&apos;m Laz.
							</h2>
							<p className="mt-4 text-lg text-white/80 max-w-2xl">
								{`I'm an Advertising & Public Relations +1 MBA student at RIT and the owner of LazarDesigns, my freelance design business. Music has always driven my work, from posters for local events to album covers for verified artists, and my internships at Winona taught me how great creative turns into real engagement.`}
							</p>
							<div className="mt-6 flex flex-wrap gap-4">
								<CtaLink href="/aboutMe">More About Me</CtaLink>
								<CtaLink
									href="/resume.pdf"
									download="Lazar_Racusin_Resume.pdf"
									variant="secondary"
								>
									Download Résumé
								</CtaLink>
							</div>
						</div>
					</section>
				</FadeInSection>
			</main>
		</div>
	);
}
