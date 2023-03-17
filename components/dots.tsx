import React from 'react'

export default function Dots() {
  return (
    <div className='flex items-center justify-between gap-3 w-full px-28'>
        <div className='bg-primary-default/60 h-3 w-4'></div>
        <div className='bg-primary-default/60 h-3 w-4'></div>
        <div className='bg-primary-default/60 h-3 w-4'></div>
        <div className='bg-primary-default/60 h-3 w-4'></div>
        <div className='bg-primary-default/60 h-3 w-4'></div>
        <div className='bg-primary-default/60 h-3 w-4'></div>
        <div className='bg-gradient-to-r from-primary-default/60 to-primary-default/0 flex-grow h-3'></div>
    </div>
  )
}
