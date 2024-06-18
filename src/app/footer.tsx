import React from 'react';
import Image from 'next/image';

function footer() {
	return (
		<div className="bg-black p-4 h-200 flex">
			<div className="w-1/2">
					<div className="relative flex ml-20">
						<Image className="pt-4" src="Alogo.svg" alt="" width={200} height={970}  />
						<Image className="absolute bottom-0 left-40" src="footer_catchcopy.svg" alt="" width={200} height={970} />
					</div>
					<div className="relative flex ml-20 mt-6 mr-4" >
						<Image src="footer_A-force.svg" alt="" width={150} height={970} />
						<Image className="ml-6" src="footer_copyright.svg" alt="" width={200} height={970} />
						<Image className="ml-6" src="footer_privacy.svg" alt="" width={50} height={970} />
					</div>
					<div className="ml-20 mt-2">
						<Image src="footer_facebook.svg" alt="" width={30} height={970} />
					</div>
			</div>
			<div className="w-1/2 flex justify-end">
				<div className="relative flex flex-col">
					<Image className="absolute right-10 mt-4" src="footer_chevronup.svg" alt="" width={30} height={970}></Image>
					<p className="right-10 mt-8 mr-6 text-white">Page Top</p>
				</div>
			</div>
		</div>
	);
}

export default footer;
