import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import CtaLink from "../components/CtaLink";

const skills = {
	Software: [
		"Adobe Photoshop (Certified)",
		"Adobe Illustrator",
		"Adobe InDesign",
		"Adobe Lightroom",
		"Figma",
		"Blender",
		"Autodesk AutoCAD (Certified)",
	],
	Creative: [
		"Album & Cover Art",
		"Poster Design",
		"Logo & Brand Identity",
		"Typography",
		"Layout",
		"Mockups & Apparel",
		"Static & Video Ad Creative",
	],
	Professional: [
		"Campaign Development",
		"Performance Creative Analysis",
		"Copywriting",
		"Leadership",
		"Collaboration",
		"Problem-Solving",
	],
};

const experience = [
	{
		role: "Performance Marketing & Creative Intern",
		org: "Winona",
		dates: "May 2026 – Aug 2026",
		points: [
			"Analyzed paid media performance across campaigns supported by $2M+ in monthly ad spend to find winning creative patterns.",
			"Created and optimized static and video ads and directed influencer user-generated content campaigns.",
		],
	},
	{
		role: "Design Intern",
		org: "Winona",
		dates: "Jul 2024 – Aug 2025",
		points: [
			"Built marketing campaigns from the ground up: market analysis, briefs, copywriting, creative, and landing pages.",
			"Applied call-to-action and branding strategies that increased social engagement and traffic by 10%.",
		],
	},
	{
		role: "Owner",
		org: "LazarDesigns",
		dates: "Feb 2020 – Present",
		points: [
			"Built a freelance design business and completed over 20 client and personal projects.",
			"Design album covers, posters, mockups, logos, and podcast covers for musical artists and clients.",
		],
	},
	{
		role: "Social Media Manager",
		org: "killtwobirds Project",
		dates: "Aug 2023 – Mar 2024",
		points: [
			"Designed posters and managed a weeks-long teaser rollout for the film's trailer.",
			"The trailer won Best Trailer at 27 film festivals, including the Cannes World Film Festival and SoCal Film Awards.",
		],
	},
];

const accomplishments = [
	"Dean's List, 3.9 GPA at RIT",
	"Top 10 Finalist in New Jersey for Graphic Design (FBLA)",
	"Competitor, AAF National Student Advertising Competition (NSAC) 2025–2026",
	"Marketing Advisor, Mirai Student Startup Network 2026–2027",
	"Treasurer, RIT Tennis Club 2025–Present",
	"Adobe Photoshop & Autodesk AutoCAD certifications",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="font-outfit font-semibold text-3xl mb-4 text-[#CA352A]">
			{children}
		</h2>
	);
}

export default function Home() {
	return (
		<div className="flex md:flex-row flex-col">
			<Sidebar screen="aboutMe" />
			<main className="flex flex-col w-full px-6 md:px-16 py-12 max-w-6xl">
				<section className="flex md:flex-row flex-col gap-10 items-center">
					<Image
						src={"/aboutMePic.jpeg"}
						alt={"Portrait of Lazar Racusin"}
						width={4000}
						height={4000}
						className="object-scale-down md:w-1/3 w-3/4 rounded-lg"
					/>
					<div className="flex flex-col md:w-2/3">
						<h1 className="font-outfit font-bold text-4xl md:text-5xl">
							Who I Am
						</h1>
						<p className="mt-4 text-lg text-white/85">
							{`I'm Lazar Racusin, a creative designer with a passion for music, visual storytelling, and building memorable brands. My work includes album covers, posters, branding, and apparel designs, with each project giving me an opportunity to turn an idea into something visually meaningful.`}
						</p>
						<p className="mt-4 text-lg text-white/85">
							{`I'm studying Advertising & Public Relations in the +1 MBA program at Rochester Institute of Technology (graduating May 2028), where I'm on the Dean's List with a 3.9 GPA. Before RIT, I studied at the Union County Technical School of Design, with senior-year dual enrollment at Kean University. I enjoy combining artistic creativity with an understanding of how design connects with an audience.`}
						</p>
						<div className="mt-6 flex flex-wrap gap-4 items-center">
							<CtaLink href="/resume.pdf" download="Lazar_Racusin_Resume.pdf">
								Download Résumé
							</CtaLink>
							<CtaLink href="/resume" variant="secondary" target="_blank">
								View Résumé
							</CtaLink>
							<Link
								href={"https://www.linkedin.com/in/lazar-racusin/"}
								target="_blank"
								aria-label="Lazar Racusin on LinkedIn"
							>
								<Image
									src={"/LinkedIn_2021.svg.png"}
									alt={"LinkedIn"}
									width={4000}
									height={4000}
									className="object-scale-down w-24"
								/>
							</Link>
						</div>
					</div>
				</section>

				<section className="mt-16 max-w-prose">
					<SectionHeading>My Creative Background</SectionHeading>
					<p className="text-lg text-white/85">
						{`Music has been part of my life for as long as I can remember, and it's what pulled me into design. In 2020 I started LazarDesigns, a freelance business to showcase my client and personal projects. I began by creating posters for local events and grew into designing album covers for verified artists, collaborating on everything from rap to rock.`}
					</p>
					<p className="mt-4 text-lg text-white/85">
						{`Translating the feeling of a song into a visual shaped my style: bold type, strong concepts and a vintage feel. My internships at Winona added the marketing side, showing me how creative decisions show up in engagement and conversion data.`}
					</p>
				</section>

				<section className="mt-16">
					<SectionHeading>My Skills</SectionHeading>
					<div className="grid md:grid-cols-3 grid-cols-1 gap-8">
						{Object.entries(skills).map(([group, items]) => (
							<div key={group}>
								<h3 className="font-outfit font-semibold text-xl mb-3">
									{group}
								</h3>
								<ul className="flex flex-wrap gap-2 list-none pl-0">
									{items.map((skill) => (
										<li
											key={skill}
											className="rounded-full bg-white/10 px-3 py-1 text-sm"
										>
											{skill}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				<section className="mt-16">
					<SectionHeading>Experience & Accomplishments</SectionHeading>
					<ol className="border-l-2 border-white/20 space-y-8 list-none pl-6">
						{experience.map((job) => (
							<li key={job.role + job.org} className="relative">
								<span className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-[#CA352A]" />
								<div className="flex md:flex-row flex-col md:items-baseline md:justify-between gap-1">
									<h3 className="font-outfit font-semibold text-xl">
										{job.role} · {job.org}
									</h3>
									<div className="text-white/60 text-sm">{job.dates}</div>
								</div>
								<ul className="mt-2 text-white/80 space-y-1">
									{job.points.map((point) => (
										<li key={point}>{point}</li>
									))}
								</ul>
							</li>
						))}
					</ol>
					<h3 className="font-outfit font-semibold text-xl mt-10 mb-3">
						Leadership & Recognition
					</h3>
					<ul className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-2 text-white/80">
						{accomplishments.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</section>

				<section className="mt-16 rounded-lg bg-white/5 p-8 flex md:flex-row flex-col md:items-center justify-between gap-6">
					<div>
						<h2 className="font-outfit font-semibold text-2xl">
							{`Let's work together.`}
						</h2>
						<p className="mt-2 text-white/70">
							Open to freelance projects, collaborations, and internship
							opportunities.
						</p>
					</div>
					<CtaLink href="/contact">Get in Touch</CtaLink>
				</section>
			</main>
		</div>
	);
}
