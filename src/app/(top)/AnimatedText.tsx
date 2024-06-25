// TOPページのヒーローイメージにアニメーションを付けるためのコンポーネント
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string; // 表示テキスト
  delayTime: number; // 遅延時間
  className?: string; // デザイン
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delayTime, className }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
		},
	};

	const letterVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<motion.div
			className={className}
			variants={containerVariants}
			initial="hidden"
			animate={isVisible ? 'visible' : 'hidden'}
		>
			{text.split('').map((char, index) => (
				// delay→各文字の遅延時間を計算
				<motion.span
					key={index}
					variants={letterVariants}
					transition={{ delay: delayTime + index * 0.1 }}>
					{char === ' ' ? '\u00A0' : char}
				</motion.span>
			))}
		</motion.div>
	);
};

export default AnimatedText;
