import React from 'react'
import Left from './Left/Main'
import Right from './Right/Main'
export default function Main() {
  return (
    <div className='container mt-3'>
    <div className='row'>
    <div className='col-sm-12'>
    <Left />
    </div> <div className='col-sm-3 mt-sm-3'>
    <Right />
    </div>
    </div>
    </div>
  )
}
