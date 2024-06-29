// components/AnimatedImage.tsx
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AnimatedRecruitImg: React.FC = () => {
	const [isInView, setIsInView] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.intersectionRatio > 0.8) {
						setIsInView(true); // ビューポートに80%入ったら画像を大画面に
					} else {
						setIsInView(false); // ビューポート80%抜けたら画像を斜めに
					}
				});
			},
			{
				threshold: [0, 0.8, 1],
			},
		);

		const currentRef = ref.current;
		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	return (
		<div ref={ref} className="flex justify-center items-center h-screen">
			<motion.div
				initial={{ scale: 0.4, rotate: 15 }} // スクロール前は画像を斜めに配置
				animate={
					isInView ? { scale: 1, rotate: 0, width: '100%' } : { scale: 0.4, rotate: 15 }
				} // スクロールされると画像が画面いっぱいに広がる
				transition={{ duration: 1.5 }}
			>
				<Image
					src="/img/top_workwithusImg.jpg"
					alt=""
					width={1440}
					height={960}
					className="object-cover"
				/>
			</motion.div>
			{isInView && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.0, delay: 1.5 }}
					className="absolute z-20"
				>
					<Image
						src="/img/top_workwithus.svg"
						alt="Overlay Image"
						width={428.53}
						height={138.77}
						className="object-cover"
					/>
				</motion.div>
			)}
		</div>
	);
};

export default AnimatedRecruitImg;
