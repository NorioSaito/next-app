import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  images: React.ReactNode[]; // 画像ファイル
  className?: string; // css。?を付けるとnullまたはundefinedでもエラーにならない。
  itemWidth: number; // 画像幅
  itemHeight: number; // 画像高さ
}

const InfiniteAutoplayImage: React.FC<Props> = ({
	images, className, itemWidth, itemHeight,
}) => {
	const ref = useRef<HTMLDivElement>(null);

	// 画像間の間隔
	const gap = 40;
	// 1画像の横幅と、画像間の合計値
	const itemWidthWithGap = itemWidth + gap;
	// 画像の数
	const numberOfContents = images.length;
	// 横に流れる画像のシーケンス合計
	const [imageBlocks, setImageBlocks] = useState(images);

	useEffect(() => {
		// 「横幅の穴埋め」
		// windowの長さよりコンテンツ数が少ない場合
		// 横幅 < 画像の合計の長さ となるように、画像群(シーケンス)をループさせて配列に加える
		if (
			ref.current?.offsetWidth
			// 5 * 1画像の横幅と画像間合計 < 画面横幅
      && imageBlocks.length * itemWidthWithGap < ref.current.offsetWidth
		) {
			// 全体の長さから何個分足りていないのか
			const fillableNumberOfContents: number = Math.floor(
				// (画面幅 -  5 *1画像の横幅と画像間合計) / 5
				(ref.current.offsetWidth - imageBlocks.length * itemWidthWithGap)
          / numberOfContents,
			);

			// シーケンスを追加するのは何個か
			const fillableNumberOfSequence: number = Math.ceil(
				fillableNumberOfContents / numberOfContents,
			);

			// シーケンス分コンテンツを追加
			const newImageBlocks = [...imageBlocks];
			for (let i = 0; i < fillableNumberOfSequence; i += 1) {
				newImageBlocks.push(...imageBlocks);
			}
			setImageBlocks(newImageBlocks);
		}
	}, [ref.current]); // DOMがレンダリングされ、横幅が確定した瞬間に実行される

	return (
		<div className="relative w-full overflow-hidden" ref={ref}>
			<AnimatePresence>
				<motion.div
					// アニメーションの変化終了時点の最終移動差分
					animate={{
						x: itemWidthWithGap,
					}}
					// 初期状態〜Animationまでをどう変化させるかを記述
					transition={{
						repeat: Infinity, // ループさせる
						duration: 10, // animationを終えるまでの時間(秒)
						ease: 'linear', // 変化方法。直線的に変化させている。
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
						className={`flex space-x-[${gap}px] w-[${itemWidthWithGap * imageBlocks.length}px]`}
					>
						{imageBlocks.map((block, index) => (
							<div
								key={index}
								className={`w-[${itemWidth}px] h-[${itemHeight}px] relative`}
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
