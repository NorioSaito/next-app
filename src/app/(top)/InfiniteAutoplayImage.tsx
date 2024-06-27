import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  images: React.ReactNode[];
  className?: string;
  itemWidth: number;
  itemHeight: number;
}

const InfiniteAutoplayImage: React.FC<Props> = ({
	images, className, itemWidth, itemHeight,
}) => {
	const ref = useRef<HTMLDivElement>(null);

	// // 1つの画像の横の長さ
	// const itemWidth = 240;
	// 画像間の間隔
	const gap = 40;
	// 画像の横幅と、画像間の合計値
	const itemWidthWithGap = itemWidth + gap;
	// 横に流れる画像のシーケンス合計
	const [imageBlocks, setImageBlocks] = useState(images);

	useEffect(() => {
		if (ref.current?.offsetWidth) {
			const containerWidth = ref.current.offsetWidth;
			const totalImageWidth = imageBlocks.length * itemWidthWithGap;
			const numRepeats = Math.ceil(containerWidth / totalImageWidth);

			let newImageBlocks = [...imageBlocks];
			for (let i = 0; i < numRepeats; i += 1) {
				newImageBlocks = newImageBlocks.concat(images);
			}

			setImageBlocks(newImageBlocks);
		}
	}, [ref.current]);

	return (
		<div className={`relative overflow-hidden ${className}`} ref={ref}>
			<AnimatePresence>
				<motion.div
					// アニメーションの変化終了時点の最終移動差分
					animate={{
						x: itemWidthWithGap,
					}}
					transition={{
						repeat: Infinity,
						duration: 10,
						ease: 'linear',
					}}
					onUpdate={(latest) => {
						if (latest.x as number >= itemWidthWithGap) {
							// １マス分動いたら発動する処理
							const newImageBlocks = [...imageBlocks];
							newImageBlocks.unshift(imageBlocks[imageBlocks.length - 1]); // 冒頭に末尾の画像を追加
							newImageBlocks.pop(); // 末端の画像を消去する
							setImageBlocks(newImageBlocks); // 変更した配列を適応
						}
					}}
					className={className}
				>
					<div
						className="flex" style={{ gap: `${gap}px` }}
					>
						{imageBlocks.map((block, index) => (
							<div
								key={index}
								className="relative"
								style={{ width: `${itemWidth}px`, height: `${itemHeight}px`, overflow: 'hidden' }}
							>
								{block}
							</div>
						))}
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default InfiniteAutoplayImage;
