import React from 'react';
/* import Breadcrumb from '../_components/breadcrumb'; */
import Image from 'next/image';
import Link from "next/link";

function Services() {
	return (
		<div>
			<div className='pagetitle ml-24 mt-36'>
				<h1 className='text-[4rem]'>Service</h1>
      </div>
      <div className='breadcrumb ml-24 mt-4'>
        <p>ここにパンくずリストを実装</p>
      </div>
      <section className='section ml-[5.75rem] mt-[5.75rem]'>
        <h1 className='sectiontitle text-[4rem] font-bold tracking-wider w-[484px]'>
          テキストテキストテキストテキスト
        </h1>
        <p className='sectiontext mt-[2.5rem] leading-relaxed tracking-wide w-[711px]'>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </section>
      <section className='SIservice mx-24 mt-24'>
        <p>(01)</p>
        <div className='SIservicecontents flex'>
          <div className='SIservicesection w-1/2 h-[40px] mt-[2.5rem] flex'>
            <Image src="SIservicetitle.svg" alt="" width={40} height={40} />
            <h2 className='SIservicetitle ml-2 text-[2rem] font-bold flex items-center justify-center'>SI事業</h2>
          </div>
          <div className='SIservicesection w-1/2 mt-[2.5rem]'>
            <h2 className='SIservicetexttitle text-[1.5rem] font-bold leading-relaxed'>テキストテキストテキスト</h2>
            <p className='SIservicetitle  mt-6 leading-relaxed'>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <Link href="/services/si" className="flex justify-end">
                <button className="bg-gray-500 hover:bg-gray-400 text-white rounded px-4 py-2 mt-[2.5rem]">SI事業詳細へ移動するボタン</button>
            </Link>
            <div className="my-[2.5rem] h-px bg-gray-300"></div>
            <div className="SIservicecontents">
              <p className='text-sm'>主なサービス内容</p>
              <p className='text-sm mt-2'>テキスト/テキスト/テキスト/テキスト/テキスト</p>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-24 my-20 h-px bg-gray-300"></div>
      <section className='Consultingservice mx-24'>
        <p>(02)</p>
        <div className='Consultingservicecontents flex'>
          <div className='Consultingservicesection h-8 w-1/2 mt-6 flex'>
            <Image src="Consaltingservicetitle.svg" alt="" width={28} height={28} />
            <h2 className='Consultingservicetitle ml-2 text-2xl font-bold'>コンサルティング事業</h2>
          </div>
          <div className='Consultingservicesection w-1/2 mt-6'>
            <h2 className='Consultingservicetexttitle text-xl font-bold leading-relaxed'>テキストテキストテキスト</h2>
            <p className='Consultingservicetitle text-sm mt-6 leading-relaxed'>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <Link href="/services/consulting" className="flex justify-end">
                <button className="bg-gray-500 hover:bg-gray-400 text-white rounded px-4 py-2 mt-6">コンサルティング事業詳細へ移動するボタン</button>
            </Link>
            <div className="mt-6 h-px bg-gray-300"></div>
            <div className="SIservicecontents">
              <p className='text-sm mt-6'>主なサービス内容</p>
              <p className='text-sm mt-2'>テキスト/テキスト/テキスト/テキスト/テキスト</p>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-24 my-20 h-px bg-gray-300"></div>
      <section className='Educationservice mx-24'>
        <p>(03)</p>
        <div className='Educationservicecontents flex'>
          <div className='Educationservicesection h-8 w-1/2 mt-6 flex'>
            <Image src="Educationservicetitle.svg" alt="" width={28} height={28} />
            <h2 className='Educationservicetitle ml-2 text-2xl font-bold'>教育事業</h2>
          </div>
          <div className='Educationservicesection w-1/2 mt-6'>
            <h2 className='Educationservicetexttitle text-xl font-bold leading-relaxed'>テキストテキストテキスト</h2>
            <p className='Educationservicetitle text-sm mt-6 leading-relaxed'>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <Link href="/services/si" className="flex justify-end">
                <button className="bg-gray-500 hover:bg-gray-400 text-white rounded px-4 py-2 mt-6">教育事業詳細へ移動するボタン</button>
            </Link>
            <div className="mt-6 h-px bg-gray-300"></div>
            <div className="SIservicecontents">
              <p className='text-sm mt-6'>主なサービス内容</p>
              <p className='text-sm mt-2'>テキスト/テキスト/テキスト/テキスト/テキスト</p>
            </div>
          </div>
			  </div>
      </section>
      <section className='Othercontents mt-36 flex'>
        <div className='Contactsection w-1/2 bg-gray-200 border border-black flex items-center justify-center'>
          <div className='grid-cols-4 w-1/2'>
            <div className='Contacttitle mt-16 flex items-center justify-center'>
              <div className='mr-1 w-3 h-3 rounded-full bg-orange-500'></div> 
              <div>お問い合わせ</div>
            </div>
            <div className='mt-6 flex justify-center'>
              <Image src="Contact.svg" alt="" width={200} height={400} />
            </div>
            <div className='Contacttext mt-6 flex justify-center leading-relaxed'>
              <p className='text-sm'>プロダクト開発、サービスについての
              <br></br>
              ご相談、ご質問などお気軽にお問い合わせください。</p>
            </div>
            <div className='flex justify-center mt-6 mb-16'>
              <button className="bg-gray-500 hover:bg-gray-400 text-white rounded px-4 py-2 ">お問い合わせへ移動するボタン</button>
            </div>
          </div>
        </div>
        <div className='Phonesection w-1/2 bg-gray-200 border-t border-r border-b border-black  flex items-center justify-center'>
          <div className='grid-cols-4 w-1/2'>
            <div className='Phonetitle mt-16 flex items-center justify-center'>
              <div className='mr-1 w-3 h-3 rounded-full bg-orange-500'></div> 
              <div>お電話</div>
            </div>
            <div className='mt-6 flex justify-center'>
              <Image src="Phone.svg" alt="" width={150} height={400} />
            </div>
            <div className='Phonetext mt-6 flex justify-center'>
              <p className='text-sm'>お電話でのお問い合わせはこちらからどうぞ。</p>
            </div>
            <div className='Phonenumber flex justify-center mt-6 mb-16'>
              <p className='text-4xl font-bold'>03-5216-2868</p>
            </div>
          </div>
        </div>
      </section>
      <div className='footer h-64'>
        <p>ここにフッターを配置</p>
      </div>
		</div>
    
	);
}

export default Services;