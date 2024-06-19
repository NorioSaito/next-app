'use client';

import React from 'react';

function Card(props: { imageUrl: string; title: string; description: string; link: string }) {
	return (
		<div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<a href="#">
				<img className="rounded-t-lg" src={props.imageUrl} alt="" />
			</a>
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{props.title}
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{props.description}
				</p>
			</div>
		</div>
	);
}

export default Card;
