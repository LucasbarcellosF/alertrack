import React from 'react'

export default function Incidentes(props) {
  const { problem, description, time, isLast } = props
  return ( 
    <div className={`${isLast ? 'mb-0' : 'mb-6'}`}>
      <p className="text-sm mb-1 text-gray-900">{problem}</p>
      <p className="text-xs mb-4 text-gray-700">{description}</p>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  )
}