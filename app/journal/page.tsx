import type { Metadata } from "next";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import CtaLink from "../components/CtaLink";

export const metadata: Metadata = {
	title: "Behind the Designs | Lazar Racusin",
	description: "From Listening to Creating: How Music Shaped My Design Style",
};

function Figure({
	src,
	alt,
	caption,
}: {
	src: string;
	alt: string;
	caption: string;
}) {
	return (
		<figure className="my-10">
			<Image
				src={src}
				alt={alt}
				width={1200}
				height={1200}
				className="w-full h-auto rounded-lg"
			/>
			<figcaption className="mt-2 text-sm text-white/60">{caption}</figcaption>
		</figure>
	);
}

// TODO: Laz, read through and adjust any details so the story is fully accurate.
export default function Journal() {
	return (
		<div className="flex md:flex-row flex-col">
			<Sidebar screen="journal" />
			<main className="flex flex-col w-full items-center px-6 md:px-16 py-12">
				<article className="max-w-prose text-lg text-white/85 leading-relaxed">
					<div className="font-outfit uppercase tracking-widest text-sm text-[#E8D44D]">
						Behind the Designs
					</div>
					<h1 className="font-outfit font-bold text-4xl md:text-5xl text-white mt-2 leading-tight">
						From Listening to Creating: How Music Shaped My Design Style
					</h1>
					<div className="mt-3 text-sm text-white/60">By Lazar Racusin</div>

					<p className="mt-8">
						{`Before I ever opened Photoshop, I was listening. Music has been the soundtrack to almost everything I've done, and at some point I stopped just hearing songs and started seeing them. A heavy bassline felt like a dark, saturated color. A soft vocal felt like open space and thin type. I didn't know it yet, but that habit of translating sound into images would become the core of how I design.`}
					</p>

					<p className="mt-4">
						{`In 2020 I started LazarDesigns, mostly as a place to put the things I was making. My first real projects were posters for local events. They taught me the basics fast: a poster has about two seconds to get someone's attention, so every choice has to earn its place. Over time those posters turned into album covers, and album covers turned into ongoing collaborations with artists across genres, from rap to rock, including verified artists.`}
					</p>

					<Figure
						src="/AlbumCovers/shine.tracklist.2.jpg"
						alt="Shine tracklist design"
						caption="The Shine tracklist, part of a full release package for envy."
					/>

					<h2 className="font-outfit font-semibold text-2xl text-white mt-10 mb-3">
						Designing what a song feels like
					</h2>
					<p>
						{`Working with an artist always starts the same way: I listen to the project over and over before I sketch anything. I'm listening for the mood, the story, and the one detail that could anchor a whole visual identity. Then I make a lot of variations, because the first idea is rarely the best one.`}
					</p>
					<p className="mt-4">
						{`My Shine poster with the producer and DJ envy is the best example. Referencing The Shining wasn't the plan at the start. But as I worked through version after version, the film's iconic carpet pattern kept matching the energy of the music, so I leaned into it until it became the center of the poster. That piece ended up printed around the RIT and Syracuse campuses and shared across social media.`}
					</p>

					<Figure
						src="/ArtistWork/Shine.Poster.1.jpg"
						alt="Shine poster featuring the carpet pattern from The Shining"
						caption="The final Shine poster, built around the famous carpet pattern."
					/>

					<h2 className="font-outfit font-semibold text-2xl text-white mt-10 mb-3">
						The part nobody sees
					</h2>
					<p>
						{`Most of the work happens between the first draft and the final file. For the Not If, When release I explored several directions for the title treatment, testing different typefaces, colors, and backgrounds before landing on the version that felt right. Some of those decisions are tiny, like the spacing between two letters, but tiny details are what make a design feel intentional.`}
					</p>

					{/* TODO: replace with a real behind-the-scenes shot (workspace, sketches, or Photoshop layers) */}
					<Figure
						src="/LogoBranding/not.if.when.garamond.png"
						alt="Typography exploration for the Not If, When title"
						caption="One of the title-treatment explorations for Not If, When."
					/>

					<h2 className="font-outfit font-semibold text-2xl text-white mt-10 mb-3">
						What music taught me about work
					</h2>
					<p>
						{`Designing for musicians made me a better collaborator. Every artist has a vision that's personal to them, and my job is to listen closely, ask the right questions, and turn something they feel into something people can see. It taught me initiative too. Nobody hands you clients when you're starting out, so I built LazarDesigns one project at a time, and it now includes over 20 of them.`}
					</p>
					<p className="mt-4">
						{`Those same habits carried into my internships at Winona, where I learned that good creative isn't just about looking great. It has to communicate a clear message and perform. Whether I'm designing an album cover or a paid social ad, I bring the same creativity, attention to detail, and focus on the audience.`}
					</p>
					<p className="mt-4">
						{`I still start every project by listening. I've just learned to listen to clients, audiences, and data as closely as I listen to music.`}
					</p>
				</article>

				<section className="mt-16 w-full max-w-prose rounded-lg bg-white/5 p-8 flex flex-col gap-4">
					<h2 className="font-outfit font-semibold text-2xl">
						Want to create something together?
					</h2>
					<div className="flex flex-wrap gap-4">
						<CtaLink href="/contact">Work With Me</CtaLink>
						<CtaLink href="/albumCovers" variant="secondary">
							See the Portfolio
						</CtaLink>
					</div>
				</section>
			</main>
		</div>
	);
}
