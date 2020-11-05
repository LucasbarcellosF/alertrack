import React from 'react'
import Graph from './components/images/Graph.svg'
import Check from './components/images/Check.svg'
import PieChart from './components/images/PieChart.svg'
import Activity from './components/images/Activity.svg'
import Sidebar from './components/images/Sidebar.svg'


export default function App() {
  return (
    <div className="bg-gray-200">
      
      <nav className="w-full h-32 relative px-4" style={{backgroundColor: '#43425D'}}>
        <div className="relative max-w-5xl mx-auto pt-6 mb-2">
          <p className="text-white">STATUS ALERTRACK</p>
        </div>
        <div className="max-w-5xl bg-white h-24 w-full flex items-center px-6 rounded-md mx-auto shadow-md">
        <img className="w-8 h-8" src={Check} alt="Check" />
          <div className="ml-8">
            <strong className="text-lg sm:text-xl">Todo o serviço operacional</strong>
            <p className="text-sm"><u>Último incidente</u> 5 dias atrás</p>
          </div>
        </div>
      </nav>

      <div className="mt-16 max-w-5xl mx-auto" style={{width: '1024px'}}>
        <img className="w-full" src={Graph} alt="Grafico" />
      </div>

      <section className="max-w-5xl flex flex-row space-x-2 mx-auto mt-8 justify-center">
        <div className="border px-32 pt-12 pb-20 bg-white w-full" style={{maxHeight: '418px', maxWidth: '515px'}}>
          <div className="flex justify-center mb-6">
            <p className="text-lg">Brasil</p>
          </div>
          <img src={PieChart} alt="Grafico de Pizza"/>
          <Component className="mt-6 mx-auto"/>
        </div>

        <div className="border w-full bg-white px-8 py-6" style={{maxHeight: '418px', maxWidth: '509px'}}>
          <div className="mb-5">
            <label className="text-xl text-left block">Serviços</label>
          </div>

          <Services
            name="SacDigital"
            img={Check}
            hasBorder
          />
          <Services
            name="Panfleto.Online"
            img={Check}
            hasBorder
          />
          <Services
            name="SMSIdeal"
            img={Check}
            hasBorder
          />
          <Services
            name="ConsultaIdeal"
            img={Check}
            hasBorder
          />
          <Services
            name="WhatsApp"
            img={Check}
            hasBorder
          />
          <Services
            name="WhatsApp Business API"
            img={Check}
          />

        </div>
      </section>
    
      <div className="mt-16 max-w-5xl mx-auto" style={{width: '1024px'}}>
        Seção de Atividade
      </div>

      <section className="max-w-5xl mx-auto mt-20">
        <label>Últimos Incidentes</label>

        <div className="bg-white px-16 py-8 mt-6">
          <label className="font-bold">02 de Agosto 2020</label>

          <div className="inline-flex items-start my-12">

            <div className="mt-10 mr-8">
              <img className="w-32" src={Sidebar} alt=""/>
            </div>

            <div className="self-end">
              <Incidentes
                problem="Solução"
                description="Gerador atenderá como backup em casos semelhantes, garantindo assim, a continuidade por períodos maiores que 23 horas."
                time="4 horas atrás"
              />
              <Incidentes
                problem="Problema sendo monitorado"
                description="Aquisição de nova unidade de GERADOR DE ENERGIA A DIESEL."
                time="8 horas atrás"
              />
              <Incidentes
                problem="Incidente Energético"
                description="Devido a incidentes naturais houvera a presença da falta de energia na região por tempo não previsto, fazendo com que hajam paradas do fornecimento de  energia de forma segura, o que faz com que a cada período de 23horas seja obrigatório o reinício das atividades dos serviços prestados.Isto ocorre diante ao fato de que o gerador disponibilizado pela ALERTRACK possui coeficiência de até 20 Horas de disponibilidade do fornecimento contínuo, somados à disponibilização por parte de armazenamento de energia, menos o tempo necessário para o desligamento dos servidores"
                time="10 horas atrás"
                isLast
              />
            </div>
          </div>

          <span>Nenhum incidente do WhatsApp neste dia</span>
        </div>


      </section>
    </div>
  )
}

function Incidentes(props) {
  const { problem, description, time, isLast } = props
  return ( 
    <div className={`${isLast ? 'mb-0' : 'mb-6'}`}>
      <p className="text-sm mb-1">{problem}</p>
      <p className="text-xs">{description}</p>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  )
}

function Services(props) {
  const { name, img, hasBorder } = props
  
  return (
    <div className={`${hasBorder ? 'border-b' : 'border-b-0'} mt-3 inline-flex justify-between w-full pb-5 `}>
      <span className="text-gray-600">{name}</span>
      <img className="w-6 h-6" src={img} alt="" />
    </div>

  )
}

function Component(props) {
  const { className } = props
  return (
    <svg className={className} id="Componente_208_1" data-name="Componente 208 – 1" xmlns="http://www.w3.org/2000/svg" width="163" height="10" viewBox="0 0 163 10">
      <g id="scroll" transform="translate(-498 -421)">
        <circle id="Elipse_32" data-name="Elipse 32" cx="5" cy="5" r="5" transform="translate(498 421)" fill="#43425d"/>
        <circle id="Elipse_33" data-name="Elipse 33" cx="5" cy="5" r="5" transform="translate(515 421)" fill="#2f2e50" opacity="0.3"/>
        <circle id="Elipse_34" data-name="Elipse 34" cx="5" cy="5" r="5" transform="translate(532 421)" fill="#2f2e50" opacity="0.3"/>
        <circle id="Elipse_35" data-name="Elipse 35" cx="5" cy="5" r="5" transform="translate(549 421)" fill="#2f2e50" opacity="0.3"/>
      </g>
      <g id="scroll-2" data-name="scroll" transform="translate(-430 -421)">
        <circle id="Elipse_32-2" data-name="Elipse 32" cx="5" cy="5" r="5" transform="translate(498 421)" fill="#2f2e50" opacity="0.299"/>
        <circle id="Elipse_33-2" data-name="Elipse 33" cx="5" cy="5" r="5" transform="translate(515 421)" fill="#2f2e50" opacity="0.3"/>
        <circle id="Elipse_34-2" data-name="Elipse 34" cx="5" cy="5" r="5" transform="translate(532 421)" fill="#2f2e50" opacity="0.3"/>
        <circle id="Elipse_35-2" data-name="Elipse 35" cx="5" cy="5" r="5" transform="translate(549 421)" fill="#2f2e50" opacity="0.3"/>
      </g>
      <g id="scroll-3" data-name="scroll" transform="translate(-362 -421)">
        <circle id="Elipse_33-3" data-name="Elipse 33" cx="5" cy="5" r="5" transform="translate(515 421)" fill="#2f2e50" opacity="0.3"/>
        <circle id="Elipse_50" data-name="Elipse 50" cx="5" cy="5" r="5" transform="translate(498 421)" fill="#2f2e50" opacity="0.3"/>
      </g>
    </svg>

  )
}