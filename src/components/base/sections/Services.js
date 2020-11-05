import React from 'react'

import Setting from '../../images/Setting.svg'
import Alert from '../../images/Alert.svg'
import Check from '../../images/Check.svg'

export default function Services() {

  return (
    <div className="border w-full bg-white px-8 py-6" style={{maxHeight: '418px', maxWidth: '393px'}}>
      <div className="mb-5">
        <label className="text-xl text-left block">Serviços</label>
      </div>

      <Status
        name="SacDigital"
        img={Check}
        dataTip="Operando"
        hasBorder
      />
      <Status
        name="Panfleto.Online"
        img={Check}
        dataTip="Operando"
        hasBorder
      />
      <Status
        name="SMSIdeal"
        img={Setting}
        dataTip="Em manutenção"
        hasBorder
      />
      <Status
        name="ConsultaIdeal"
        img={Alert}
        dataTip="Oscilando"
        hasBorder
      />
      <Status
        name="WhatsApp"
        img={Check}
        dataTip="Operando"
        hasBorder
      />
      <Status
        name="WhatsApp Business API"
        dataTip="Operando"
        img={Check}
      />

    </div>
  )
}

function Status(props) {
  const { name, img, hasBorder, dataTip } = props
  
  return (
    <div className={`${hasBorder ? 'border-b' : 'border-b-0'} mt-3 inline-flex justify-between w-full pb-5 `}>
      <span className="text-gray-600">{name}</span>
      <img className="w-6 h-6" src={img} alt="" data-tip={dataTip}/>
    </div>

  )
}
