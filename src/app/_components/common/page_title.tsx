'use client'
import React from 'react'
import Breadcruma_trail from '../common/breadcrumb_trail'


function PageTitle(props: { title: string,}) {
  return (
    <section className='mx-auto max-w-7xl justify-between h-[30%] w-full px-[80px] py-[10%] grid grid-rows-2 gap-5'>
        <h1 className='text-6xl font-medium'>{props.title}</h1>
        <Breadcruma_trail/>
    </section>
  )
}

export default PageTitle