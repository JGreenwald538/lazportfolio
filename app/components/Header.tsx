export default function Header({name, description}: {name: string, description: string}) {
	return (
		<div className="flex md:flex-row flex-col md:h-56 md:mt-0 mt-4 items-center justify-center">
			<div className="text-4xl font-semibold md:ml-20 ml-0 w-fit">{name}</div>
			<div className="text-xl md:w-1/2 w-3/4 md:ml-6 ml-0 md:mt-0 mt-2">
				{description}
			</div>
		</div>
	);
}
