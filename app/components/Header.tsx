export default function Header({name, description}: {name: string, description: string}) {
	return (
		<div className="flex flex-col md:h-56 md:mt-0 mt-4 items-center justify-center">
			<div className="text-4xl font-semibold w-fit">{name}</div>
			<div className="text-xl mt-2 text-center w-full max-w-3/4">
				{description}
			</div>
		</div>
	);
}
