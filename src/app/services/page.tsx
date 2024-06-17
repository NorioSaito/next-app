import React from 'react';
import Hero from '../_components/Hero';
import './service.css';
import Image from "next/image";
import Link from 'next/link';
/*import { motion } from framer - motion;*/



function Services() {
  return (
    <div> {/* このdivが全ての要素を囲む親要素となる */}
      <Hero title='Services' text='サービス' desc='どんな事業をやっているのか？' />
      <div>
        <main className='service_top'>
          <div className='container mx-auto p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-8 gap-4'>
              <div>
                <h1 className='text-2xl font-bold mb-4 '>ミッション</h1>
                <h2 className='text-gray-700 mb-4'>お客様の成功と笑顔を広げるベストデリバリーカンパニー</h2>
                <p className='text-gray-700 ml-4'>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                </p>
              </div>
              <div className='bg-white p-6 rounded shadow-md'>
                <img src='A-force_horizon.svg' alt='' />
              </div>
              <hr className='col-span-2 my-4 border-gray-300'></hr>
              <div>
                <h1 className='text-2xl font-bold mb-4 '>エクセレントサービス</h1>
                <h1 className='text-gray-700 mb-4'>エクセレントサービス小見出し</h1>
                <p className='text-gray-700 ml-4'>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                </p>
              </div>
              <div className='bg-white p-6 rounded shadow-md'>
                <img src='A-force_horizon.svg' alt='' />
              </div>
              <hr className='col-span-2 my-4 border-gray-300'></hr>
              <div>
                <h1 className='text-2xl font-bold mb-4 '>SI事業</h1>
                <h2 className='text-gray-700 mb-4'>SI事業小見出し</h2>
                <p className='text-gray-700 ml-4'>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                </p>
                <button className='bg-black text-white py-2 px-10 mt-4 ml-4 rounded-md' >
                  詳しく見る
                </button>
              </div>
              <div className='items-center justify-center bg-white p-6 rounded shadow-md'>
                <img src="A-force_horizon.svg" alt='' />
              </div>
              <hr className='col-span-2 my-4 border-gray-300'></hr>
              <div>
                <h1 className='text-2xl font-bold mb-4 '>コンサルティング事業</h1>
                <h2 className='text-gray-700 mb-4'>コンサルティング事業小見出し</h2>
                <p className='text-gray-700 ml-4'>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                </p>
                <button className='bg-black text-white py-2 px-10 mt-4 ml-4 rounded-md' >
                  詳しく見る
                </button>
              </div>
              <div className='items-center justify-center bg-white p-6 rounded shadow-md'>
                <img src="A-force_horizon.svg" alt='' />
              </div>
              <hr className='col-span-2 my-4 border-gray-300'></hr>
              <div>
                <h1 className='text-2xl font-bold mb-4 '>教育事業</h1>
                <h2 className='text-gray-700 mb-4'>教育事業小見出し</h2>
                <p className='text-gray-700 ml-4'>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                  テキストテキストテキストテキストテキストテキストテキスト<br></br>
                </p>
                <button className='bg-black text-white py-2 px-10 mt-4 ml-4 rounded-md' >
                  詳しく見る
                </button>
              </div>
              <div className='items-center justify-center bg-white p-6 rounded shadow-md'>
                <img src="A-force_horizon.svg" alt='' />
              </div>
              <hr className='col-span-2 my-4 border-gray-300'></hr>
            </div>
          </div >
        </main >
      </div >
    </div >
  );
}

export default Services;
