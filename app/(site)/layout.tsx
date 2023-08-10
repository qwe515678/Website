
import React from 'react'
import Header from './components/header'
import Footer from './components/footer'



export default function RootLayout({children}: {children: React.ReactNode}){
  return (
      <div>
        <Header/>
        {children}
        <Footer/>
      </div>
  )
}