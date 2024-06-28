// 白抜き文字のセクションタイトルにアニメーションを付与するコンポーネント
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedSectionTitleProps {
  text: string;
  className?: string;
}

const AnimatedSectionTitle: React.FC<AnimatedSectionTitleProps> = ({ text, className }) => {
	const letters = text.split('');

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1, // 描画速度変更
			},
		},
	};

	const letterVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			Transition: { duration: 0.5 },
		},
	};

	return (
		<motion.div
			className={className}
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.3 }}
		>
			{letters.map((char, index) => (
				<motion.span key={index} variants={letterVariants} className="inline-block">
					{char}
				</motion.span>
			))}
		</motion.div>
	);
};

export default AnimatedSectionTitle;
