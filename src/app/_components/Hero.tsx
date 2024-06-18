'use client';
import { motion } from 'framer-motion';
import React from 'react';

function Hero(props: { title: string, text: string}) {
  return (
    <section className="grid h-64 bg-neutral-600 content-center">
      <motion.p
        className="text-5xl font-bold text-white w-[80%]"
        initial={{ x: '0', y: '-20%', opacity: 0 }}
        animate={{ x: '20%', y: '-20%', opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        { props.title }
      </motion.p>
      <motion.section
        initial={{ y: '40%', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="ml-64"
      >
        <h1>{ props.text }</h1>
        <p>テキストテキストテキスト</p>
      </motion.section>
    </section>
  )
}

export default Hero;
