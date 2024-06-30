'use client';

import { Square2StackIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumb from '@/app/_components/Breadcrumb';

type Detail = {
	subject: string;
	description: string;
};
type Feature = {
	name: string;
	details: Detail[];
};
type Product = {
	name: string;
	text: string;
	features: Feature[];
};

function ProductDetail({ product }: { product: Product }) {
	const variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 2 },
		},
	};

	return (
		<div className="mx-20">
			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				variants={variants}
			>
				<div className="mb-10">
					<h1 className="text-af-md md:text-af-lg">{product.name}</h1>
					<Breadcrumb />
				</div>
				<p className="text-af-xs md:text-af-lg font-extrabold md:w-1/2">{product.text}</p>
			</motion.section>
			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				variants={variants}
				className="mt-10 border-y divide-y"
			>
				{product.features.map((feature, index) => (
					<div key={index}>
						<div className="py-10 grid grid-flow-col">
							<div className="flex">
								{/* 機能名 */}
								<div className="flex-1">
									<div className="text-af-xs flex-1">
										({String(index + 1).padStart(2, '0')})
									</div>
									<div className="text-af-sm">{feature.name}</div>
								</div>
								<div className="flex flex-col flex-1">
									{feature.details.map((detail) => (
										<div key={detail.subject}>
											{/* 詳細タイトル */}
											<div className="text-[1.5rem] mb-5">
												{detail.subject}
											</div>
											{/* 説明 */}
											<div className="text-[1rem] mb-10">
												{detail.description}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</motion.section>
			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				variants={variants}
				className="mt-10"
			>
				<div>
					<div className="py-10 grid grid-flow-col">
						<div className="flex">
							<div className="flex-1">
								<div className="text-af-xs flex-1">(01)</div>
								<div className="text-af-md flex-1">関連</div>
							</div>
							<div className="flex flex-col flex-1">
								<Link
									href="#"
									className="text-af-orange flex"
									target="_blank"
									rel="noopener"
								>
									リンク
									<Square2StackIcon className="h-5" />
								</Link>
								<Link
									href="#"
									className="text-af-orange flex"
									target="_blank"
									rel="noopener"
								>
									リンク
									<Square2StackIcon className="h-5" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</motion.section>
		</div>
	);
}

export default ProductDetail;
