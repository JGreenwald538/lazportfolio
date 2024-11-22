import ImagePoster from "./components/ImagePoster";
import Sidebar from "./components/Sidebar";

export default function Home() {
	return (
		<div className="flex flex-row">
			<Sidebar borderColor="yellow" />
			<div className="grid grid-cols-3 gap-10 w-full h-fit my-4 mx-10">
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
				<ImagePoster />
			</div>
		</div>
	);
}
