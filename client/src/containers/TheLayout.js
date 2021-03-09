import React, { useEffect } from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {
  useEffect(()=>{
    if(window.localStorage.getItem('c-token')){
      window.location.href='/login'
    }
  },[])
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
