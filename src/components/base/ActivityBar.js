import React from 'react'

export default function Activity() {
  const cores = {
    0: '#4ad991',
    1: '#FFDA83',
    2: '#FF215D'
  }

  const dataTips = {
    64: '02 de Agosto, 2020 - Incidente Energético',
    60: '31 de Junho, 2020 - WhatsApp Interrompido'
  }

  const eventos = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 0, 0, 1
  ]
  
  const Eventos = function() {
    return (
      <>
        {eventos.map((evento, index) => <ActivityBar dataTip={dataTips[index]} fill={cores[evento]}/>)}
      </>
    )
  } 
  
  return (
    <div className="inline-flex -space-x-4 h-full md:overflow-hidden">
      <Eventos />
    </div>
  )
}

function ActivityBar(props) {
  const { fill, dataTip } = props
  return (
    <svg data-tip={dataTip} width="30" height="82" viewBox="0 0 30 82">
      <defs>
        <filter id="BG" x="0" y="0" width="30" height="82" filterUnits="userSpaceOnUse">
          <feOffset dy="2" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood flood-opacity="0.039"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="Referrer" transform="translate(9 7)">
        <g transform="matrix(1, 0, 0, 1, -9, -7)" filter="url(#BG)">
          <rect id="BG-2" data-name="BG" width="12" height="64" transform="translate(9 7)" fill={fill}/>
        </g>
      </g>
    </svg>
  )
}