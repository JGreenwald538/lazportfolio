import React from "react";
import Marquee from "react-fast-marquee";

const messages = [
	"Shop Coming Soon",
];

const TickerComponent = () => {
	return (
		<div className="flex justify-center w-full overflow-hidden text-red-500 py-2">
			<div className="max-w-full w-full">
				<Marquee speed={50} gradient={false} loop={0} autoFill>
					{messages.map((msg, index) => (
						<span
							key={index}
							className="text-lg font-bold mx-10 whitespace-nowrap"
						>
							{msg}
						</span>
					))}
				</Marquee>
			</div>
		</div>
	);
};

export default TickerComponent;
