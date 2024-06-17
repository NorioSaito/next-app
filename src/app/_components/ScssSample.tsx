import React from 'react';
import styles from '@/public/scss/sample.module.scss'; // eslint-disable-line

function ScssSample() {
	return (
		<div className={styles.bg_black}>
			<p className={styles.defaulttextcolor}>SCSS のサンプル</p>
		</div>
	);
}

export default ScssSample;