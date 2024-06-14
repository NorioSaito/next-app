import Hero from "./_components/Hero";
import './page.css';
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero title="Top" text="トップページ" desc='エイ・フォース株式会社トップページ' />
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
    </main>
  );
}
