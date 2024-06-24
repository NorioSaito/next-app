import { motion } from 'framer-motion';

const AnimatedSectionTitle = ({ text, className }: { text: string; className?: string }) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5, // Initial delay before animation starts
				staggerChildren: 0.3, // Delay between each letter animation
			},
		},
	};

	const letterVariants = {
		hidden: { opacity: 0, y: 20 }, // Start from slightly below
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	// Our MissionとProductsは中央寄せ
	const shouldCenter = text === 'Our Mission' || text === 'Products';

	return (
		<motion.div
			className={`${shouldCenter ? 'flex items-center justify-center' : ''} ${className}`}
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{text.split('').map((char, index) => (
				<motion.span key={index} variants={letterVariants}>
					{char}
				</motion.span>
			))}
		</motion.div>
	);
};

export default AnimatedSectionTitle;
