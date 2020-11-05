import React from 'react'
import Check from '../images/Check.svg'

export default function Navbar() {

  return (
    <nav className="w-full h-32 relative px-4" style={{backgroundColor: '#43425D'}}>
      <div className="relative max-w-5xl mx-auto pt-6 mb-2">
        <p className="text-white">STATUS ALERTRACK</p>
      </div>
      <div className="max-w-5xl bg-white h-24 w-full flex items-center px-6 rounded-md mx-auto shadow-md">
      <img className="w-8 h-8" src={Check} alt="Check" />
        <div className="ml-8 w-full">
          <strong className="text-lg sm:text-xl">Todo o serviço operacional</strong>
          <p className="text-sm"><a href="#incidentes" className="underline">Último incidente</a> 5 dias atrás</p>
        </div>
      </div>
    </nav>

  )
}