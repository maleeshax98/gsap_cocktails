"use client"
import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)


const page = () => {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-7xl text-indigo-300'>Hello world kk</h1>
    </div>
  )
}

export default page