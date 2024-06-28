import React from 'react';
import MemberCard from '../../_components/common/member_card';
import { memberData } from './member_data';
import Button from '../../_components/common/Button';
import Harftitle from '../../_components/common/HarfTitle';

// 日付を使って降順にソートし、最新の3つを取得
const getLatestMembers = () => {
	return memberData
		.sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime())
		.slice(0, 3);
};

const MemberSection = () => {
	const latestMembers = getLatestMembers();

	return (
		<section className="bg-af-cream p-[8rem]">
			<Harftitle
				title="Member"
				subTitle="社員紹介"
				text_position="center"
				sub_color="black"
			/>
			<div className="grid grid-cols-3 gap-[4rem] mt-[7.2rem] mb-[6.4rem]">
				{latestMembers.map((member, index) => (
					<MemberCard
						key={index}
						position={member.position}
						title={member.title}
						sub={member.sub}
						img={member.img}
						link={member.link}
					/>
				))}
			</div>
			<div className="flex justify-center">
				<Button title="社員紹介へ" link="" />
			</div>
		</section>
	);
};

export default MemberSection;
