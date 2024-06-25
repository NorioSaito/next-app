'use client';

import React from 'react';

function EmployeeCard(props: { imageUrl: string; occupation: string; title: string; entryYear: string; link: string}) {
	return (
        <div className="grid-cols-4 justify-start">
            <a href={props.link}>
                <img src={props.imageUrl} alt="" className="w-[400px] h-[272px] border border-af-black rounded-[16px] hover:scale-105" />
            </a>
            <button className="w-[100px] mt-[15px] rounded-full px-2 border border-af-black flex align-center justify-start md:text-base">
                <span className="text-af-green font-bold text-[8px]">●</span>
                <p className="pl-[5px] py-[1px] text-[12px]">{props.occupation}</p>
            </button>
            <a href={props.link} className="hover:underline">
                <h2 className="mt-[15px] text-af-sm font-bold">{props.title}</h2>
            </a>
            <h2 className="mt-[10px] text-af-xs">{props.entryYear}年入社</h2>
        </div>
	);
}

export default EmployeeCard;