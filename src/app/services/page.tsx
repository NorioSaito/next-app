import React from 'react';
/* import Breadcrumb from '../_components/breadcrumb'; */
import Image from 'next/image';

function Services() {
	return (
		<div>
			<div className='pagetitle ml-24 mt-36'>
				<h1 className='text-6xl'>Service</h1>
      </div>
      <div className='breadcrumb ml-24 mt-4'>
        <p>ここにパンくずリストを実装</p>
      </div>
      <div className='section ml-24 mt-24'>
        <h1 className='sectiontitle text-5xl font-bold leading-normal tracking-wider w-1/3'>
          テキストテキストテキストテキスト
        </h1>
        <p className='sectiontext mt-6 text-sm leading-normal tracking-wide w-3/5'>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <div className='SIservice mx-24 mt-24'>
        <p>(01)</p>
        <div className='SIservicecontents flex'>
          <div className='SIservicesection w-1/2 mt-6 flex'>
            <Image src="SIservicetitle.svg" alt="" width={28} height={28} />
            <h2 className='SIservicetitle text-xl font-bold'>SI事業</h2>
          </div>
          <div className='SIservicesection w-1/2 mt-6'>
            <h2 className='SIservicetexttitle text-lg font-bold'>テキストテキストテキスト</h2>
            <p className='SIservicetitle text-sm mt-6'>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p className='mt-6'>ここにSI事業詳細へ移動するボタンを配置</p>
            <div className="mt-6 h-px bg-gray-300"></div>
            <div className="SIservicecontents">
              <p className='text-sm mt-6'>主なサービス内容</p>
              <p className='text-sm mt-2'>テキスト/テキスト/テキスト/テキスト/テキスト</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Consultingservice mx-24 mt-24'>
        <p>(02)</p>
        <div className='Consultingservicecontents flex'>
          <div className='Consultingservicesection w-1/2 mt-6 flex'>
            <Image src="/app/service/SIservicetitle.svg" alt="" width={28} height={28} />
            <h2 className='Consultingservicetitle text-xl font-bold'>コンサルティング事業</h2>
          </div>
          <div className='Consultingservicesection w-1/2 mt-6'>
            <h2 className='Consultingservicetexttitle text-lg font-bold'>テキストテキストテキスト</h2>
            <p className='Consultingservicetitle text-sm mt-6'>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p className='mt-6'>ここにコンサルティング事業詳細へ移動するボタンを配置</p>
            <div className="mt-6 h-px bg-gray-300"></div>
            <div className="SIservicecontents">
              <p className='text-sm mt-6'>主なサービス内容</p>
              <p className='text-sm mt-2'>テキスト/テキスト/テキスト/テキスト/テキスト</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Educationservice mx-24 mt-24'>
        <p>(03)</p>
        <div className='Educationservicecontents flex'>
          <div className='Educationservicesection w-1/2 mt-6 flex'>
            <Image src="/app/service/SIservicetitle.svg" alt="" width={28} height={28} />
            <h2 className='Educationservicetitle text-xl font-bold'>教育事業</h2>
          </div>
          <div className='Educationservicesection w-1/2 mt-6'>
            <h2 className='Educationservicetexttitle text-lg font-bold'>テキストテキストテキスト</h2>
            <p className='Educationservicetitle text-sm mt-6'>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p className='mt-6'>ここに教育事業詳細へ移動するボタンを配置</p>
            <div className="mt-6 h-px bg-gray-300"></div>
            <div className="SIservicecontents">
              <p className='text-sm mt-6'>主なサービス内容</p>
              <p className='text-sm mt-2'>テキスト/テキスト/テキスト/テキスト/テキスト</p>
            </div>
          </div>
			  </div>
      </div>
      <div className='Othercontents flex mt-36'>
        <div className='Contactsection w-1/2 h-64 bg-gray-200  border-t border-l border-b border-black'>

        </div>
        <div className='Phonesection w-1/2 h-64 bg-gray-200 border-t border-r border-b border-2 border-black'>

        </div>
      </div>
      <div className='footer h-64'>
        <p>ここにフッターを配置</p>
      </div>
		</div>
    
	);
}

export default Services;
