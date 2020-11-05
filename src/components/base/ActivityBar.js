import React from 'react'

export default function Activity() {

  return (
    <div className="inline-flex -space-x-4 h-full flex-wrap lg:flex-no-wrap mx-auto">
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#FFDA83"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#FFDA83"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#FF215D"/>
      <ActivityBar fill="#FF215D" dataTip="31 de Junho, 2020 - WhatsApp Interrompido"/>
      <ActivityBar fill="#FFDA83"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#4ad991"/>
      <ActivityBar fill="#FFDA83" dataTip="02 de Agosto - Incidente Energético"/>
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