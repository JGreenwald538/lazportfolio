import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import CtaLink from "../../components/CtaLink";
import ProjectGallery from "../../components/ProjectGallery";
import { featuredProjects, getFeaturedProject } from "../../data/featured";

export function generateStaticParams() {
	return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const project = getFeaturedProject((await params).slug);
	return { title: project ? `${project.title} | Lazar Racusin` : "Project" };
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const project = getFeaturedProject((await params).slug);
	if (!project) notFound();

	const otherProjects = featuredProjects.filter((p) => p.slug !== project.slug);

	return (
		<div className="flex md:flex-row flex-col">
			<Sidebar screen="home" />
			<main className="flex flex-col w-full px-6 md:px-16 py-12 max-w-6xl">
				<Link href="/" className="text-white/60 hover:text-white w-fit">
					← Back to Home
				</Link>
				<div className="mt-6 text-sm uppercase tracking-widest text-white/60 font-outfit">
					{project.category}
				</div>
				<h1 className="font-outfit font-bold text-4xl md:text-6xl mt-2">
					{project.title}
				</h1>
				<div className="mt-4 flex flex-wrap gap-2">
					{project.tools.map((tool) => (
						<span
							key={tool}
							className="rounded-full bg-white/10 px-3 py-1 text-sm"
						>
							{tool}
						</span>
					))}
				</div>

				<div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-12">
					<div className="flex flex-col space-y-8 max-w-prose text-lg text-white/85">
						<section>
							<h2 className="font-outfit font-semibold text-2xl text-white mb-2">
								Project
							</h2>
							<p>{project.project}</p>
						</section>
						<section>
							<h2 className="font-outfit font-semibold text-2xl text-white mb-2">
								Objective
							</h2>
							<p>{project.objective}</p>
						</section>
						<section>
							<h2 className="font-outfit font-semibold text-2xl text-white mb-2">
								Creative Process
							</h2>
							<div className="space-y-3">
								{project.process.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
							</div>
						</section>
						<section>
							<h2 className="font-outfit font-semibold text-2xl text-white mb-2">
								Result
							</h2>
							<p>{project.result}</p>
						</section>
					</div>
					<ProjectGallery images={project.gallery} />
				</div>

				<section className="mt-16 rounded-lg bg-white/5 p-8 flex md:flex-row flex-col md:items-center justify-between gap-6">
					<div>
						<h2 className="font-outfit font-semibold text-2xl">
							Have a project like this in mind?
						</h2>
						<p className="mt-2 text-white/70">
							{`Let's talk about what you're working on.`}
						</p>
					</div>
					<CtaLink href="/contact">{`Let's Work Together`}</CtaLink>
				</section>

				<section className="mt-12">
					<h2 className="font-outfit font-semibold text-xl mb-4">
						More featured work
					</h2>
					<div className="flex flex-wrap gap-4">
						{otherProjects.map((p) => (
							<Link
								key={p.slug}
								href={`/projects/${p.slug}`}
								className="rounded-md border-2 border-white/20 hover:border-white px-4 py-2 transition-colors"
							>
								{p.title} →
							</Link>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
