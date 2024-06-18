import React from 'react'
import Hero from '../_components/Hero'
import Card from '../_components/common/Card'
import Harftitle from '../_components/common/HarfTitle'
import NewsContent from '../_components/common/NewsContent'
import Button from '../_components/common/Button'
import Footer from '../footer'

// リクルートサイトのページ
function Recruit() {
  const myDate = new Date(2024, 5, 14);
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
        <div className="h-12 w-px bg-gray-300"></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
      </div>
    );
  };
  return (
    <>
    <Hero title='Recruit' text='採用情報' />

    {/* ニュースセクション */}
    <section className='grid grid-cols-3 mt-[5%] mb-[5%] pt-[5%] pb-[5%] pl-[10%] pr-[10%] md:grid-cols-2'>
      <div className='m-tb-5 items-center grid'>
        <Harftitle title='News' subTitle='ニュース' text_position='start'></Harftitle>
      </div>
      <div className='col-span-2 md:col-span-1'>
        <div className='divide-y'>
          <NewsContent title='2025年入社の選考を開始しました' subTitle='採用情報' date={myDate}/>
          <NewsContent title='2024年入社式を開催しました' subTitle='採用情報' date={myDate}/>
          <NewsContent title='2024年新年ご挨拶' subTitle='会社情報' date={myDate}/>
        </div>
        <div className='grid justify-end'>
          <Button title='A-force' link=''></Button>
        </div>
      </div>
    </section>
    {/* 社員紹介セクション */}
    <h2 className='m-[3%] text-center font-medium text-2xl md:text-4xl'>社員紹介</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 pl-[5%] pr-[5%]">
      <section className='w-full m-auto p-5 hover:scale-105'>
        <Card imageUrl='A-force_horizon.svg' title='社員１' description='テキストテキスト' link=''/>
      </section>
      <section className='w-full m-auto p-5 hover:scale-105'>
        <Card imageUrl='A-force_horizon.svg' title='社員２' description='テキストテキスト' link=''/>
      </section>
      <section className='w-full m-auto p-5 hover:scale-105'>
        <Card imageUrl='A-force_horizon.svg' title='社員３' description='テキストテキスト' link=''/>
      </section>
    </div>
      <Footer></Footer>
    </>
  )
}

export default Recruit
