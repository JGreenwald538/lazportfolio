export type ProjectImage = {
	folder: string;
	file: string;
	alt: string;
};

export type FeaturedProject = {
	slug: string;
	title: string;
	category: string;
	cover: ProjectImage;
	summary: string;
	project: string;
	objective: string;
	process: string[];
	result: string;
	tools: string[];
	gallery: ProjectImage[];
};

export const featuredProjects: FeaturedProject[] = [
	{
		slug: "shine-poster",
		title: "Shine Poster",
		category: "Artist Work · Collaboration with envy",
		cover: {
			folder: "ArtistWork",
			file: "Shine.Poster.1.jpg",
			alt: "Shine poster for envy, inspired by the carpet pattern from The Shining",
		},
		summary:
			"This poster was made in collaboration with the producer and DJ, envy. This project was made as a part of work I did for the album cover and tracklist design. It was meant to symbolize parts from the movie The Shining. Having aspects of the movie incorporated into the design was not initially the thought but through multiple variations, the famous carpet pattern became a main part of the poster. This was posted around the RIT and Syracuse campus as well as social media.",
		project:
			"A promotional poster for the producer and DJ envy, created alongside the album cover and tracklist design for the Shine release.",
		objective:
			"Give the release a single, recognizable visual that could carry across print and social media and feel connected to the rest of the album artwork.",
		process: [
			"I started from the album cover and tracklist work so the poster would feel like part of the same world, then pushed through multiple variations of layout and imagery.",
			"Referencing The Shining was not the original idea. As the variations developed, the film's famous hexagonal carpet pattern kept fitting the mood of the music, so it became the foundation of the poster.",
			"From there I balanced the pattern with the type so the poster still reads clearly from a distance on a campus wall or a phone screen.",
		],
		result:
			"The finished poster was printed and posted around the RIT and Syracuse campuses and shared across social media to promote the release, alongside the matching album cover, tracklist, and vinyl mockup.",
		tools: ["Adobe Photoshop", "Adobe Illustrator"],
		gallery: [
			{
				folder: "ArtistWork",
				file: "Shine.Poster.1.jpg",
				alt: "Final Shine poster",
			},
			{
				folder: "AlbumCovers",
				file: "shine.tracklist.2.jpg",
				alt: "Shine tracklist design",
			},
			{
				folder: "AlbumCovers",
				file: "itllshine.3.jpg",
				alt: "It'll Shine album cover",
			},
			{
				folder: "ArtistWork",
				file: "Ashine.vinyl.1.jpg",
				alt: "Shine vinyl mockup",
			},
		],
	},
	{
		slug: "lend-a-hand",
		title: "Lend a Hand",
		category: "Poster · Personal Project",
		cover: {
			folder: "Posters",
			file: "Lendinghand1.png",
			alt: "Lend a Hand poster showing a hand reaching up with yellow type wrapped around it",
		},
		summary:
			"This poster was made by initially just finding a cool picture of a hand position. That turned into me looking at it and thinking of classical paintings of a hand reaching out for something or someone. I wanted to add some motivational or helpful text to this design and warp the text around the hand. It became a form of light on the hand and created an overlay onto parts of the fingers. This was made through multiple layers in Photoshop and edited through Lightroom.",
		project:
			"A personal poster built around a single photograph of a reaching hand, carrying the message that asking for help isn't embarrassing.",
		objective:
			"Turn a simple image into a supportive, motivational message, and make the typography feel like part of the photo instead of sitting on top of it.",
		process: [
			"It started with finding a photo of a hand in an interesting position. Looking at it reminded me of classical paintings of a hand reaching out for something or someone.",
			"I wanted helpful, motivational text, so I warped the headline around the hand. The type started acting like a source of light, overlapping parts of the fingers.",
			"The piece was built from multiple layers in Photoshop, then color graded and textured in Lightroom to get the warm, grainy finish.",
		],
		result:
			"A finished poster that pairs a bold headline with an honest message: everyone needs help at some point. It became one of my favorite examples of letting type and image interact.",
		tools: ["Adobe Photoshop", "Adobe Lightroom"],
		gallery: [
			{
				folder: "Posters",
				file: "Lendinghand1.png",
				alt: "Final Lend a Hand poster",
			},
		],
	},
	{
		slug: "urban-bites",
		title: "Urban Bites",
		category: "Logo & Branding · Personal Project",
		cover: {
			folder: "LogoBranding",
			file: "Artboard.8.insta.jpg",
			alt: "Urban Bites food truck brand identity",
		},
		summary:
			"This is a personal branding project that was designed for a fictional food truck business. Using Adobe Illustrator and then Photoshop for the mockups, I created a simple brand package for Urban Bites. I used the attributes of the “U” to look like a toothpick to represent the food aspect of the business, and had the “B” symbolize a truck for its “on-the-go” experience. The pattern that goes along with the logo ties together its modern and fun style and gives the consumer a reason to walk up to the truck and try out their signature meals.",
		project:
			"A brand package for Urban Bites, a fictional food truck: logo, supporting pattern, and real-world mockups.",
		objective:
			"Create an identity that instantly says food and on-the-go, and feels modern and fun enough to make someone walk up to the truck.",
		process: [
			"I designed the logo in Adobe Illustrator, building meaning into the letterforms themselves.",
			"The “U” takes on the shape of a toothpick to represent food, while the “B” is shaped to suggest a truck and the on-the-go experience.",
			"A repeating pattern extends the logo into a full system, and I used Photoshop to place the brand onto mockups to show how it would live in the real world.",
		],
		result:
			"A complete, cohesive brand package (logo, pattern, and mockups) that shows how a small business identity can work across a truck, packaging, and social media.",
		tools: ["Adobe Illustrator", "Adobe Photoshop"],
		gallery: [
			{
				folder: "LogoBranding",
				file: "Artboard.8.insta.jpg",
				alt: "Urban Bites brand overview",
			},
			{
				folder: "LogoBranding",
				file: "Artboard.8.2insta.jpg",
				alt: "Urban Bites logo and pattern",
			},
			{
				folder: "LogoBranding",
				file: "Artboard.8.3insta.jpg",
				alt: "Urban Bites mockups",
			},
		],
	},
];

export function getFeaturedProject(slug: string) {
	return featuredProjects.find((project) => project.slug === slug);
}
