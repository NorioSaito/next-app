import React from 'react';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="px-20 py-24">
			<section className="flex items-start">
				<Image className="pb-24" src="top_Alogo.svg" alt="" width={487} height={402}></Image>
				<Image src="top_logomark.svg" alt="" width={144} height={143}></Image>
				<div className="flex-col">
					<h1>Shining</h1>
					<Image className="" src="top_ace.svg" alt="" width={189.21} height={80.84}></Image>
					<Image className="" src="top_criticaltimes.svg" alt="" width={628} height={128}></Image>
				</div>
			</section>
			<div>
				<Image src="top_catchcopy.svg" alt="" width={468} height={24}></Image>
			</div>
			<section className="flex flex-col items-center justify-center pt-64">
				<div className="flex">
					<Image className="pb-20" src="top_orangepoint.svg" alt="" width={16} height={16}></Image>
					<h3 className="pl-4">会社案内</h3>
				</div>
				<Image className="pb-16" src="top_ourmission.svg" alt="" width={380} height={96}></Image>
				<Image src="top_ourmissiontitle.svg" alt="" width={703} height={317}></Image>
				<h3 className="pt-20">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
				</h3>
			</section>
		</main>
	);
}
