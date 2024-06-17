'use client'
import Hero from "./_components/Hero";
import React, { useEffect } from "react";
import './page.css';
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from 'framer-motion'

export default function Home() {
  const pinRef = useRef(null);
  useEffect(() => {    // GSAPの初期化とScrollTriggerの有効化
    gsap.registerPlugin(ScrollTrigger);

    // セクション1のアニメーション設定
    gsap.fromTo('.section1', {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.section1',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    });

    // セクション2のアニメーション設定
    gsap.fromTo(pinRef.current, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: pinRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    });

    // セクション3のアニメーション設定
    gsap.fromTo('.section3', {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.section3',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    });
  }, []);

  return (
    <main >
      <Hero title="Top" text="トップページ" desc='エイ・フォース株式会社トップページ' />
      <div>
        <main className='service_top'>
          <div className="h-screen bg-blue w-full flex justify-center items-center">
            <p className="text-[100px]">section 1</p>
          </div>
          <div ref={pinRef} className="h-screen w-full bg-dark flex items-center justify-center">
            <p className="text-[100px]">section 2</p>
          </div>
          <div className="h-screen bg-green w-full flex justify-center items-center">
            <p className="text-[100px]">section 3</p>
          </div>          <div className='containers'>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-8 px-8 gap-4'>
              <Image
                src="A-force_horizon.svg"
                alt=""
                width={200}
                height={970}
              />
              <div>
                <div className='desc_introcom'>
                  テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                  テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                  テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                </div>
                <button className='bg-black text-white bottom-10 right-10 py-2 px-10 mt-4 ml-4 rounded-md'>
                  会社紹介へ
                </button>
              </div>
            </div>
          </div>
          <div className='service'>
            <div>
              <motion.p
                className="text-5xl font-bold text-black"
                initial={{ x: '10vw', y: '-2vw', opacity: 0 }}
                animate={{ x: '15vw', y: '-2vw', opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <h1>
                  Service
                </h1>
              </motion.p>
              <p className='servicetitle_jp'>
                サービス
              </p>
            </div>
            <div>
              <div className='service_subtitle'>
                小見出し
              </div>
              <div className='desc_service'>
                テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                テキストテキストテキストテキストテキストテキストテキストテキスト<br />
                テキストテキストテキストテキストテキストテキストテキストテキスト<br />
              </div>
              <button className='btn_service' type='button'>
                サービスへ
              </button>
            </div>
          </div>
          <div className='products'>
            <h1 className='productstitle'>Products</h1>
            <h1 className='productstitle_jp'>取扱製品一覧</h1>
          </div>
          <div className='mainproductcard'>
            <section className='salesforce'>
              <img className='salesforce_img' src="A-force_horizon.svg" alt='' />
              <div className='card_content'>
                <p className='mainproduct_text'>Salesforce</p>
              </div>
            </section>
            <section className='celf'>
              <img className='celf_img' src="A-force_horizon.svg" alt='' />
              <div className='card_content'>
                <p className='mainproduct_text'>CELF</p>
              </div>
            </section>
          </div>
          <div className='otherproductcard'>
            <section className='product'>
              <img className='product_img' src="A-force_horizon.svg" alt='' />
              <div className='card_content'>
                <p className='product_text'>製品名1</p>
              </div>
            </section>
            <section className='product'>
              <img className='product_img' src="A-force_horizon.svg" alt='' />
              <div className='card_content'>
                <p className='product_text'>製品名2</p>
              </div>
            </section>
            <section className='product'>
              <img className='product_img' src="A-force_horizon.svg" alt='' />
              <div className='card_content'>
                <p className='product_text'>製品名3</p>
              </div>
            </section>
            <section className='product'>
              <img className='product_img' src="A-force_horizon.svg" alt='' />
              <div className='card_content'>
                <p className='product_text'>製品名4</p>
              </div>
            </section>
            <section className='product'>
              <img className='product_img' src="A-force_horizon.svg" alt='' />
              <div className='card_content'>
                <p className='product_text'>製品名5</p>
              </div>
            </section>
          </div>
          <div className='productmore'>
            <button className='btn_productmore' type='button'>
              製品をもっと見る
            </button>
          </div>
          <div className='news'>
            <div>
              <h1 className='newstitle'>
                News
              </h1>
              <p className='newstitle_jp'>
                ニュース
              </p>
            </div>
            <div className='newscolumns'>
              <ul className='newslist'>
                <li>11111</li>
                <li>22222</li>
                <li>33333</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </main >
  );
}


