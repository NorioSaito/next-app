/* 社員紹介詳細画面 */

import React from 'react';
import BreadcrumaTrail from '../../../../_components/common/breadcrumb_trail';
import EmployeeCard from '../../../../_components/common/EmployeeCard';

function Employee_Details() {
	return (
		<div className="px-[80px]">
			<div className="mt-[80px]">
				<h1 className="text-af-lg">Interview#1</h1>
			</div>
			<div className="mt-[24px]">
				<BreadcrumaTrail />
			</div>
			<section className="mt-[142px]">
				<h1 className="text-af-lg font-bold leading-[1.6] tracking-wider w-[486px]">
				テキストテキストテキストテキスト
				</h1>
				<p className="text-af-xs mt-[10px] leading-[1.6] tracking-wider w-[714px]">
                エイ・フォースで働く社員について、仕事内容、やりがい、今までのキャリアなどをインタビューしました。
				</p>
			</section>
		</div>
	);
}

export default Employee_Details;
