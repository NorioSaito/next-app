'use client'
import { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import Harftitle from '../app/_components/common/HarfTitle'
import Button from '../app/_components/common/Button'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
  } from '@headlessui/react'




export default function Footer() {
  
    return (
        <footer className='grid grid-row-2 h-full'>
            {/* お問い合わせ、電話番号欄 */}
            <section className='grid grid-cols-2 w-full'>
                <div className='grid text-center border border-black py-[15%]'>
                    <Harftitle title='Contact' subTitle='お問い合わせ' text_position='center'/>
                    <div className='my-[7%]'>
                        <p>プロダクト開発、サービスについての</p>
                        <p>ご相談、ご質問などご気軽にお問い合わせください。</p>
                    </div>
                    <div className='grid justify-center'>
                        <Button title='ニュース一覧へ' link=''></Button>
                    </div>
                </div>
                <div className='grid text-center border border-black py-[15%]'>
                    <Harftitle title='Phone' subTitle='お電話' text_position='center'/>
                    <div>
                        <p>お電話でのお問い合わせはこちらからどうぞ</p>
                    </div>
                    <div>
                        <p className='text-4xl font-bold'>03-5216-2868</p>
                    </div>
                </div>
            </section>
            {/* ネイビーフッター部分 */}
            <section className='grid grid-cols-6 bg-slate-800 col-sapn-2 px-[80px]'>
                <div className='col-span-5 grid grid-rows-3'>
                    <div></div>
                    <div className='flex'>
                        <Image
                            src="logo_a-force_horizon1 3.svg"
                            alt=""
                            width={150}
                            height={100}
                        />
                        <p className='grid items-center mx-5 text-white'>Coppyright©2024 A-force All Rights Reserved.</p>
                        <Image src="/p_mark (3).png" alt="" width={70} height={50}></Image>
                    </div>
                    <div> 
                        <span className="">
                            <svg className="h-8 w-8 text-slate-800 rounded-full"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="black" fill="white" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                        </span>
                    </div>
                </div>
                <div className='grid grid-rows-2 text-end'>
                    <div className=''>

                    </div>
                    <div className=''>
                        <div className="grid grid-rows-9 lg:gap-x-12 text-end">
                            <Link href="/company" className="text-sm font-semibold leading-6 text-white text-left">
                            Company
                            </Link>
                            <Link href="/services" className="text-sm font-semibold leading-6 text-white text-left">
                            Services
                            </Link>
                            <Link href="/products" className="text-sm font-semibold leading-6 text-white text-left">
                            Products
                            </Link>
                            <Link href="/recruit" className="text-sm font-semibold leading-6 text-white text-left">
                            Recruit
                            </Link>
                            <Link href="/contact" className="text-sm font-semibold leading-6 text-white text-left">
                            Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
  }