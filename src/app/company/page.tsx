import React from 'react'
import Hero from '../_components/Hero'
import Image from "next/image";

 /* 「沿革」に表示する点と線の設定 */
const TimelineDot: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
      <div className="h-12 w-px bg-gray-300"></div>
    </div>
  );
};

const TimelineEND: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
    </div>
  );
};


function page() {
  return (
    <div>
      <Hero title='Company' text='会社概要'  /> 
      <main className='CompanyTop'>
        <div className='Greetings'> {/* 「ご挨拶」の親要素 */}
          <div className='text-center pt-10 pb-10'>
            <h1 className='text-3xl font-bold'>ご挨拶</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-80'>
            <Image
              src="A-force_horizon.svg"
              alt=""
              width={265}
              height={260}
            />
            <div>
              <p className='text-gray-700 ml-2'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </div>
        <div className='TimeLine'> {/* 「沿革」の親要素 */}
          <div>
            <div className='text-center pt-10 pb-10'>
              <h1 className='text-3xl font-bold'>沿革</h1>
            </div>
            <div className='grid grid-cols-3 px-96 items-center'>
              <div className="grid grid-rows-7 gap-4">
                <div className="flex items-center justify-end h-12">YY:MM</div>
                <div className="flex items-center justify-end h-12">YY:MM</div>
                <div className="flex items-center justify-end h-12">YY:MM</div>
                <div className="flex items-center justify-end h-12">YY:MM</div>
                <div className="flex items-center justify-end h-12">YY:MM</div>
                <div className="flex items-center justify-end h-12">YY:MM</div>
                <div className="flex items-center justify-end h-12">YY:MM</div>
              </div>
              <div className="grid grid-rows-7 gap-0">
                <TimelineDot />
                <TimelineDot />
                <TimelineDot />
                <TimelineDot />
                <TimelineDot />
                <TimelineDot />
                <TimelineEND />
              </div>
              <div className="grid grid-rows-7 gap-4">
                <div className="h-12 flex items-center">テキスト</div>
                <div className="h-12 flex items-center">テキスト</div>
                <div className="h-12 flex items-center">テキスト</div>
                <div className="h-12 flex items-center">テキスト</div>
                <div className="h-12 flex items-center">テキスト</div>
                <div className="h-12 flex items-center">テキスト</div>
                <div className="h-12 flex items-center">テキスト</div>
              </div>
            </div>
          </div>
        </div>
        <div className='AboutUs'> {/* 「会社概要」の親要素 */}
          <div>
            <div className='text-center pt-10 pb-10'>
              <h1 className='text-3xl font-bold'>会社概要</h1>
            </div>
            <div className="grid grid-rows-19 px-96 gap-1">
                <div className="h-12 flex items-center">会社名　　　：　テキスト</div>
                <div className="h-px w-full bg-gray-300"></div>
                <div className="h-12 flex items-center">所在地　　　：　テキスト</div>
                <div className="h-px w-full bg-gray-300"></div>
                <div className="h-12 flex items-center">設立　　　　：　テキスト</div>
                <div className="h-px w-full bg-gray-300"></div>
                <div className="h-12 flex items-center">売上　　　　：　テキスト</div>
                <div className="h-px w-full bg-gray-300"></div>
                <div className="h-12 flex items-center">代表　　　　：　テキスト</div>
                <div className="h-px w-full bg-gray-300"></div>
                <div className="h-12 flex items-center">従業員　　　：　テキスト</div>
                <div className="h-px w-full bg-gray-300"></div>
                <div className="h-12 flex items-center">許認可　　　：　テキスト</div>
                <div className="h-px w-full bg-gray-300"></div>
                <div className="h-12 flex items-center">所属団体　　：　テキスト</div>
                <div className="h-px w-full bg-gray-300"></div>
                <div className="h-12 flex items-center">顧問　　　　：　テキスト</div>
                <div className="h-px w-full bg-gray-300"></div>
              </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default page
