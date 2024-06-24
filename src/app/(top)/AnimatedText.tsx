// TOPページのヒーローイメージにアニメーションを付けるためのコンポーネント
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
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
			animate={isVisible ? 'visible' : 'hidden'}
		>
			{text.split('').map((char, index) => (
				<motion.span key={index} variants={letterVariants}>
					{char === ' ' ? '\u00A0' : char}
				</motion.span>
			))}
		</motion.div>
	);
};

export default AnimatedText;
