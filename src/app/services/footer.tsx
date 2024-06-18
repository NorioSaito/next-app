import React from 'react';
import Image from 'next/image';

function footer() {
	return (
		<div className="bg-black p-4 h-auto">
			<Image src="Alogo.svg" alt="" width={200} height={970} ></Image>
			<Image src="A-force_horizon.svg" alt="" width={200} height={970}></Image>
		</div>
	);
}

export default footer;
