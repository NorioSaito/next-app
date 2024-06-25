/* 社員紹介TOP画面 */

import React from 'react';
import BreadcrumaTrail from '../../../_components/common/breadcrumb_trail';
import EmployeeCard from '../../../_components/common/EmployeeCard';

function Employee_Introductions() {
	return (
		<div className="px-[80px]">
			<div className="mt-[80px]">
				<h1 className="text-af-lg">社員紹介</h1>
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
			<section className="mt-[100px] pb-[200px]">
				<div className="grid-cols-2">
                    <div className="flex justify-center">
                        <div>
                            <EmployeeCard imageUrl="/A-force_horizon.svg" occupation="開発職" title="社員インタビュー#01" entryYear="2019" link="/recruit/employee_introductions/employee_details" />
                        </div>
                        <div className="px-[40px]">
                            <EmployeeCard imageUrl="/A-force_horizon.svg" occupation="営業職" title="社員インタビュー#02" entryYear="2018" link="/recruit" />
                        </div>
                        <div>
                            <EmployeeCard imageUrl="/A-force_horizon.svg" occupation="マネージャー職" title="社員インタビュー#03" entryYear="2010" link="/recruit" />
                        </div>
                    </div>
                    <div className="pt-[80px] flex align-center justify-center">
                    <div>
                            <EmployeeCard imageUrl="/A-force_horizon.svg" occupation="開発職" title="社員インタビュー#04" entryYear="2021" link="/recruit" />
                        </div>
                        <div className="px-[35px]">
                            <EmployeeCard imageUrl="/A-force_horizon.svg" occupation="開発職" title="社員インタビュー#05" entryYear="2023" link="/recruit" />
                        </div>
                        <div>
                            <EmployeeCard imageUrl="/A-force_horizon.svg" occupation="開発職" title="社員インタビュー#06" entryYear="2022" link="/recruit" />
                        </div>
                    </div>
				</div>
			</section>
        </div>
    );
}

export default Employee_Introductions;

