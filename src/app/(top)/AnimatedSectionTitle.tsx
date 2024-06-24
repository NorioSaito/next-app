import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AnimatedSectionTitle = ({ text, className }: { text: string; className?: string }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// ビューポートに入ったとき
						containerRef.current?.classList.add('animate');
					} else {
						// ビューポートから出たとき
						containerRef.current?.classList.remove('animate');
					}
				});
			},
			{ threshold: 0.5 }, // 50%以上が見えている場合にトリガ
		);

		const currentRef = containerRef.current; // 変数にコピー

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.3,
			},
		},
	};

	const letterVariants = {
		hidden: { opacity: 0, y: 20 },
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
