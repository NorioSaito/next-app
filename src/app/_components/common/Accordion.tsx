'use client';

import { useState } from 'react';
import style from '../../assets/css/common.module.css';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

const handleToggle = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
  setIsOpen(!isOpen);
};

return (
      <div className={`${style.accordionContent} ${isOpen ? 'open' : ''} w-full`}>
      {isOpen && (
        <>
        <div className='grid-rows-17'>
          <div className="flex items-center">
            <div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-green flex items-center justify-center"></div>
            <p className="mr-[110px] text-[2.4rem]">2008年</p>
            <div className="grid-rows-3">
              <p className=" text-[1.6rem]">・Webシステム改編</p>
              <p className="mt-[1rem] text-[1.6rem]">・皮革製品を主アイテムとした実店舗を首都圏ショッピングモールにて開店</p>
            </div>
          </div>
          <div className="my-[24px] h-px bg-slate-200"></div>
          <div className="flex items-center">
            <div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-orange flex items-center justify-center"></div>
            <p className="mr-[110px] text-[2.4rem]">2009年</p>
            <div className="grid-rows-2">
              <p className=" text-[1.6rem]">・ウィングアークテクノロジーズ(株)のビジネス・インテリジェンスツール “Dr.Sum” を利用したBIシステム開発</p>
            </div>
          </div>
          <div className="my-[24px] h-px bg-slate-200"></div>
          <div className="flex items-center">
            <div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-yellow flex items-center justify-center"></div>
            <p className="mr-[110px] text-[2.4rem]">2010年</p>
            <div className="grid-rows-2">
              <p className=" text-[1.6rem]">・Webサイト改編・会社ロゴデザイン変更</p>
              <p className="mt-[1rem] text-[1.6rem]">・iPhoneアプリの開発を始める</p>
            </div>
          </div>
          <div className="my-[24px] h-px bg-slate-200"></div>
          <div className="flex items-center">
            <div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-green flex items-center justify-center"></div>
            <p className="mr-[110px] text-[2.4rem]">2011年</p>
            <div className="grid-rows-3">
              <p className=" text-[1.6rem]">・(株)ライトアップのASP製品群の代理店となる
              </p>
              <p className="mt-[1rem] text-[1.6rem]">・FaceBookページをオープン</p>
              <p className="mt-[1rem] text-[1.6rem]">・水耕栽培他農業事業の調査始める</p>
            </div>
          </div>
          <div className="my-[24px] h-px bg-slate-200"></div>
          <div className="flex items-center">
            <div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-orange flex items-center justify-center"></div>
            <p className="mr-[110px] text-[2.4rem]">2012年</p>
            <div className="grid-rows-4">
              <p className=" text-[1.6rem]">・intra-mart/Biz∫を用いた大規模業務アプリケーション開発プロジェクトが開始となる</p>
              <p className="mt-[1rem] text-[1.6rem]">・iPadソリューション“インタラクティブPro”の販売代理店・開発パートナーとなる</p>
              <p className="mt-[1rem] text-[1.6rem]">・CRM（顧客管理）＋SNSの開発を始める</p>
              <p className="mt-[1rem] text-[1.6rem]">・金融個人富裕層向け業務パッケージ開発・導入支援分野で株式会社イーピーシーと業務提携を行う</p>
            </div>
          </div>
          <div className="my-[24px] h-px bg-slate-200"></div>
          <div className="flex items-center">
            <div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-yellow flex items-center justify-center"></div>
            <p className="mr-[110px] text-[2.4rem]">2013年</p>
            <div className="grid-rows-2">
              <p className=" text-[1.6rem]">・携帯・スマホ向けCRMソリューションでビートレンド株式会社と業務提携を行う</p>
              <p className="mt-[1rem] text-[1.6rem]">・インフォアジャパン開発パートナーと契約を締結</p>
            </div>
          </div>
          <div className="my-[24px] h-px bg-slate-200"></div>
          <div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-green flex items-center justify-center"></div>
							<p className='mr-[20px] text-[2.4rem]'>2013年</p>
							<p className='w-[90px] text-[2rem]'>11月</p>
							<div className='grid-rows-2'>
								<p className='text-[1.6rem]'>・業務拡大に伴い本社を移転</p>
								<p className='mt-[1rem] text-[1.6rem]'>・教育事業の開始（”ITエース養成塾”を開設）</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
          <div className="flex items-center">
            <div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-orange flex items-center justify-center"></div>
            <p className="mr-[110px] text-[2.4rem]">2014年</p>
            <div className="grid-rows-1">
              <p className=" text-[1.6rem]">・(株）アシストとQlickViewの販売・開発パートナー契約の締結</p>
            </div>
          </div>
          <div className="my-[24px] h-px bg-slate-200"></div>
          <div className="flex items-center">
            <div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-yellow flex items-center justify-center"></div>
            <p className="mr-[110px] text-[2.4rem]">2015年</p>
            <div className="grid-rows-2">
              <p className=" text-[1.6rem]">・infor SCE の開発パートナーになる</p>
              <p className="mt-[1rem] text-[1.6rem]">・L-Space（ワーキングスペース、自習室）を開設</p>
            </div>
          </div>
          <div className="my-[24px] h-px bg-slate-200"></div>
          <div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-green flex items-center justify-center"></div>
							<p className='mr-[20px] text-[2.4rem]'>2016年</p>
							<p className='w-[90px] text-[2rem]'>3月</p>
							<div className='grid-rows-2'>
								<p className='text-[1.6rem]'>・プライバシーマーク取得</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
            <div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-orange flex items-center justify-center"></div>
							<p className='mr-[20px] text-[2.4rem]'>2016年</p>
							<p className='w-[90px] text-[2rem]'>8月</p>
							<div className='grid-rows-2'>
								<p className='text-[1.6rem]'>・DevOps協議会への加盟と参加</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
            <div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-yellow flex items-center justify-center"></div>
							<p className='mr-[20px] text-[2.4rem]'>2017年</p>
							<p className='w-[90px] text-[2rem]'>1月</p>
							<div className='grid-rows-2'>
								<p className='text-[1.6rem]'>・教育事業にAIコース等を開講</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
            <div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-green flex items-center justify-center"></div>
							<p className='mr-[20px] text-[2.4rem]'>2017年</p>
							<p className='w-[90px] text-[2rem]'>12月</p>
							<div className='grid-rows-2'>
								<p className='text-[1.6rem]'>・SCSKのCELF（EXCELベースのWEBアプリケーション開発ソリューション）の販売代理店契約締結</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
            <div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-orange flex items-center justify-center"></div>
							<p className='mr-[20px] text-[2.4rem]'>2018年</p>
							<p className='w-[90px] text-[2rem]'>1月</p>
							<div className='grid-rows-2'>
								<p className='text-[1.6rem]'>・AIソリューション　BOTの受注</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
            <div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-yellow flex items-center justify-center"></div>
							<p className='mr-[20px] text-[2.4rem]'>2018年</p>
							<p className='w-[90px] text-[2rem]'>7月</p>
							<div className='grid-rows-2'>
								<p className='text-[1.6rem]'>・CELFの顧客向けセミナー開始</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
            <div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-green flex items-center justify-center"></div>
							<p className='mr-[20px] text-[2.4rem]'>2019年</p>
							<p className='w-[90px] text-[2rem]'>10月</p>
							<div className='grid-rows-2'>
								<p className='text-[1.6rem]'>・UNIFINITYの販売・開発パートナー契約の締結</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
            <div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-orange flex items-center justify-center"></div>
							<p className='mr-[20px] text-[2.4rem]'>2020年</p>
							<p className='w-[90px] text-[2rem]'>7月</p>
							<div className='grid-rows-2'>
								<p className='text-[1.6rem]'>・salesforce / Pardotの導入及びパートナー開始</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>

          </div>
        </>
      )}
      <div className=' flex justify-end'>
        <a onClick={handleToggle} className={`${style.btn} ${style.bgleft} grid grid-cols-3 rounded-full pl-4 pr-2 py-2 block`}>
          <div className="col-span-2 text-af-xs flex items-center justify-center">{isOpen ? '閉じる' : 'すべて見る'}</div>
          <div className="grid items-center contents-center justify-end">
            <div className="font-bold w-[45px] h-[45px] rounded-full bg-af-orange flex items-center justify-center">
            {isOpen ? 
              <ChevronUpIcon className='text-white w-[12px] h-[12px] ' /> : 
              <ChevronDownIcon className='text-white w-[12px] h-[12px] ' />}
            </div>
          </div>
        </a>
      </div>

    </div>
  );
};

export default Accordion;