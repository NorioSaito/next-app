// TOPページのヒーローイメージにアニメーションを付けるためのコンポーネント
import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
	const letters = text.split('');

	const containerVariants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				// 描画速度変更
				staggerChildren: 0.3,
			},
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
			animate="visible"
		>
			{letters.map((letter, index) => (
				<motion.span key={index} variants={letterVariants}>
					{letter}
				</motion.span>
			))}
		</motion.div>
	);
};

export default AnimatedText;
