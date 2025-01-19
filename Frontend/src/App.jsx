import React, { useState } from 'react'
import Editor from './Components/Editor/Main'
import './App.css'
import {ToastContainer} from  'react-toastify'
export default function App() {
  return (
   <div>
    <ToastContainer position='top-center' autoClose={3000} />
    <Editor/>
   </div>
  )
}


export const ApiLink=`http://localhost:5000`