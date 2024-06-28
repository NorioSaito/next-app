import React from 'react';

function DoorCard(props: {
	main: string;
	sub: string;
	img: string;
	text: string;
	sdcolor: string;
}) {
	return (
		<div
			className={`h-[400px] w-[373px] rounded-t-[200px] rounded-b-[16px] bg-af-white p-[8rem] shadow-af-door shadow-fuchsia-${props.sdcolor}`}
		>
			<div>
				<p className="text-center text-[4.8rem]">{props.main}</p>
				<p className="text-af-xs mb-[2.4rem]">{props.sub}</p>
				<p className="text-af-xs">{props.text}</p>
				{props.img}
			</div>
		</div>
	);
}

export default DoorCard;
