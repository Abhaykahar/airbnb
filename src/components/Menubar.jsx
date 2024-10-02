import React from 'react'
import house from '../images/house.jpg'
import dish from '../images/dish.jpg'
import omg from '../images/omg.jpg'
import pool from '../images/pool.jpg'
import top from '../images/top.jpg'
import view from '../images/view.jpg'
import lake from '../images/lake.jpg'
import bich from '../images/bich.jpg'

function Menubar() {
  return (
    <div className='flex pt-8'>
      <div className='ml-11 cursor-pointer'>
        <img src={house} className='w-8 h-8' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>House</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={dish} className='w-8 h-8' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>Dish</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={omg} className='w-8 h-8' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>Omg</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={pool} className='w-8 h-8' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>Pool</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={top} className='w-8 h-8' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>Top</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={view} className='w-8 h-8' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>View</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={lake} className='w-8 h-8' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>Lake</h1>
      </div>
      <div className='ml-11 cursor-pointer'>
        <img src={bich} className='w-8 h-8' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>Bich</h1>
      </div>


    </div>
  )
}

export default Menubar
