import React from 'react';
import Image from 'next/image';

function footer() {
	return (
		<div className="bg-black p-4 h-auto">
			<Image className="ml-7 pt-4" src="Alogo.svg" alt="" width={200} height={970} ></Image>
			<div className="relative flex" >
				<Image className="ml-6 mt-6 mr-4" src="footer_A-force.svg" alt="" width={150} height={970}></Image>
				<Image className="ml-6 mt-6 mr-4" src="footer_copyright.svg" alt="" width={200} height={970}></Image>
			</div>
		</div>
	);
}

export default footer;
