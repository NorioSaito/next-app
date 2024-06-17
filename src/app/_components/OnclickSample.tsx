// フロントで実行される処理を記述する際は 'use client' を宣言する
// なるべくコンポーネント化する方がよい

'use client';

import React from 'react';

// ボタンが押されたときに実行する処理を関数として定義する
const handleClick = () => {
	// 実行したい処理を各
};
function OnclickSample() {
	return (
		<div>
			{/* button タグの onClick 属性に宣言した関数を設定する */}
			<button onClick={handleClick}>クリック</button>
		</div>
	);
}

export default OnclickSample;
