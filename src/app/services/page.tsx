import React from 'react';
import Hero from '../_components/Hero';
import './service.css';
import Image from "next/image";
import Link from 'next/link';


function Services() {
  return (
    <div> {/* このdivが全ての要素を囲む親要素となる */}
      <Hero title='Services' text='サービス' desc='どんな事業をやっているのか？' />
      <div>
        <main className='service_top'>
          <h1 className='service_catchcopy'>
            キャッチコピーキャッチコピーキャッチコピー
          </h1>
          <div className='containers'>
            <div className='introdure_company'>
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
                <button className='btn_introcom' type='button'>
                  会社紹介へ
                </button>
              </div>
            </div>
          </div>
          <div className='service'>
            <div>
              <h1 className='servicetitle'>
                Service
              </h1>
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
          <div className='productcard'>
            <section className='salesforce'>
              <img className='salesforce_img' src="A-force_horizon.svg" alt='' />
              <div className='card_content'>
                <p className='salesforce_text'>Salesforce</p>
              </div>
            </section>
            <section className='celf'>
              <img className='celf_img' src="A-force_horizon.svg" alt='' />
              <div className='card_content'>
                <p className='celf_text'>CELF</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Services;
