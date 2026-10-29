"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const EMAIL = "lazardesigns11@gmail.com";

const inputClasses =
	"w-full rounded-md bg-white/5 border-2 border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none transition-colors";

export default function Contact() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name"));
		const email = String(data.get("email"));
		const message = String(data.get("message"));

		// TODO: replace with a real form backend. Until then, hand off to the visitor's email client.
		const subject = encodeURIComponent(`Project inquiry from ${name}`);
		const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
		window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
		setSubmitted(true);
	}

	return (
		<div className="flex md:flex-row flex-col">
			<Sidebar screen="contact" />
			<main className="flex flex-col w-full px-6 md:px-16 py-12 max-w-6xl">
				<h1 className="font-outfit font-bold text-4xl md:text-6xl leading-tight">
					{`Have an idea? Let's bring it to life.`}
				</h1>
				<p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
					{`I'm always interested in new creative opportunities, collaborations, and projects. Whether you're looking for a designer or simply want to connect, I'd love to hear from you.`}
				</p>

				<div className="mt-12 grid lg:grid-cols-3 grid-cols-1 gap-12">
					<div className="lg:col-span-2">
						{submitted ? (
							<div
								className="rounded-lg bg-white/5 p-8"
								role="status"
							>
								<h2 className="font-outfit font-semibold text-2xl">
									Thanks for reaching out!
								</h2>
								<p className="mt-2 text-white/80">
									{`Your email app should have opened with your message. If it didn't, email me directly at `}
									<a href={`mailto:${EMAIL}`} className="underline">
										{EMAIL}
									</a>
									.
								</p>
								<button
									className="mt-4 underline text-white/70 hover:text-white"
									onClick={() => setSubmitted(false)}
								>
									Send another message
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="flex flex-col gap-6">
								<div className="grid md:grid-cols-2 grid-cols-1 gap-6">
									<label className="flex flex-col gap-2">
										<span className="font-outfit font-medium">Name</span>
										<input
											name="name"
											type="text"
											required
											autoComplete="name"
											placeholder="Your name"
											className={inputClasses}
										/>
									</label>
									<label className="flex flex-col gap-2">
										<span className="font-outfit font-medium">Email</span>
										<input
											name="email"
											type="email"
											required
											autoComplete="email"
											placeholder="you@example.com"
											className={inputClasses}
										/>
									</label>
								</div>
								<label className="flex flex-col gap-2">
									<span className="font-outfit font-medium">Message</span>
									<textarea
										name="message"
										required
										rows={6}
										placeholder="Tell me about your project, timeline, or idea."
										className={inputClasses}
									/>
								</label>
								<button
									type="submit"
									className="self-start px-6 py-3 rounded-md bg-white text-slate-950 font-outfit font-semibold transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
								>
									Send Message
								</button>
							</form>
						)}
					</div>

					<aside className="flex flex-col gap-5 text-lg">
						<h2 className="font-outfit font-semibold text-2xl">
							Other ways to connect
						</h2>
						<button
							className="flex flex-row items-center gap-3 hover:text-[#FF7A59] w-fit"
							onClick={() => {
								navigator.clipboard.writeText(EMAIL);
								alert("Email copied");
							}}
						>
							<MdOutlineMailOutline size={24} />
							{EMAIL}
						</button>
						<Link
							className="flex flex-row items-center gap-3 hover:text-[#FF7A59] w-fit"
							href={"https://www.instagram.com/lazardesigns_/"}
							target="_blank"
						>
							<FaInstagram size={24} />
							@lazardesigns_
						</Link>
						<Link
							className="flex flex-row items-center gap-3 hover:text-[#FF7A59] w-fit"
							href={"https://www.linkedin.com/in/lazar-racusin/"}
							target="_blank"
						>
							<FaLinkedin size={24} />
							Lazar Racusin
						</Link>
						<a
							href="/resume.pdf"
							download="Lazar_Racusin_Resume.pdf"
							className="mt-2 underline text-white/70 hover:text-white w-fit"
						>
							Download my résumé
						</a>
					</aside>
				</div>
			</main>
		</div>
	);
}
