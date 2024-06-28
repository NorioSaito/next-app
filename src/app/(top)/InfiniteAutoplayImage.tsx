'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
	images: React.ReactNode[];
	className?: string;
	itemWidth: number;
	itemHeight: number;
};

const InfiniteAutoplayImage: React.FC<Props> = ({
	images, className, itemWidth, itemHeight,
}) => {
	const ref = useRef<HTMLDivElement>(null);

	// 画像の間隔
	const gap = 40;
	// 1画像の横幅 + 間隔
	const itemWidthWithGap = itemWidth + gap;
	// 画像の数
	const numberOfContents = images.length;
	// 横に流れる画像のシーケンス合計
	const [imageBlocks, setImageBlocks] = useState<React.ReactNode[]>([]);

	useEffect(() => {
		if (ref.current?.offsetWidth) {
			// 画面の横幅
			const containerWidth = ref.current.offsetWidth;
			// 画像群の幅合計値
			const totalImageWidth = images.length * itemWidthWithGap;
			const numRepeats = Math.ceil(containerWidth / totalImageWidth) + 2;

			let newImageBlocks: React.ReactNode[] = [];
			for (let i = 0; i < numRepeats; i += 1) {
				newImageBlocks = newImageBlocks.concat(images);
			}

			setImageBlocks(newImageBlocks);
		}
	}, [ref.current, images, itemWidthWithGap]);

	return (
		<div className="relative w-full overflow-hidden" ref={ref}>
			<motion.div
				initial={{ x: -itemWidthWithGap * numberOfContents }}
				animate={{ x: 0 }}
				transition={{
					repeat: Infinity,
					repeatType: 'loop',
					duration: 20,
					ease: 'linear',
				}}
				// アニメーション終了時処理
				onAnimationComplete={() => {
					setImageBlocks((prev) => {
						const newBlocks = prev.slice(numberOfContents);
						return newBlocks.concat(prev.slice(0, numberOfContents));
					});
				}}
				className={`flex ${className}`}
				style={{ gap: `${gap}px`, width: `${itemWidthWithGap * imageBlocks.length}px` }}
			>
				{imageBlocks.map((block, index) => (
					<div
						key={index}
						className="relative"
						style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
					>
						{block}
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default InfiniteAutoplayImage;
