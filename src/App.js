import React from 'react'

import Graph from './components/images/Graph.svg'
import Check from './components/images/Check.svg'
import PieChart from './components/images/PieChart.svg'
import Sidebar from './components/images/Sidebar.svg'
import Setting from './components/images/Setting.svg'
import Alert from './components/images/Alert.svg'

import Activity from './components/base/ActivityBar'
import Navbar from './components/base/Navbar'

import ReactTooltip from 'react-tooltip'
import { Helmet } from 'react-helmet'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Status Alertrack</title>
        <meta name="description" content="Controle de estado de operações" />
      </Helmet>

      <ReactTooltip place="right"/>
      <Navbar/>  
      <div className="bg-gray-200 py-4">
        <div className="mt-16 max-w-5xl mx-auto px-4 lg:px-0 object-cover">
          <img className="w-auto md:w-full object-cover" src={Graph} alt="Grafico"/>
        </div>

        <section className="max-w-5xl flex flex-col md:flex-row sm:space-x-2 space-y-2 sm:space-y-0 mx-auto mt-8 justify-center px-4 lg:px-0">
          <div className="border px-32 pt-12 pb-20 bg-white w-full" style={{maxHeight: '418px'}}>
            <div className="flex justify-center mb-6">
              <p className="text-lg">Brasil</p>
            </div>
            <img className="mx-auto" src={PieChart} alt="Grafico de Pizza"/>
            <Component className="mt-6 mx-auto"/>
          </div>

          <div className="border w-full bg-white px-8 py-6" style={{maxHeight: '418px', maxWidth: '393px'}}>
            <div className="mb-5">
              <label className="text-xl text-left block">Serviços</label>
            </div>

            <Services
              name="SacDigital"
              img={Check}
              dataTip="Operando"
              hasBorder
            />
            <Services
              name="Panfleto.Online"
              img={Check}
              dataTip="Operando"
              hasBorder
            />
            <Services
              name="SMSIdeal"
              img={Setting}
              dataTip="Em manutenção"
              hasBorder
            />
            <Services
              name="ConsultaIdeal"
              img={Alert}
              dataTip="Oscilando"
              hasBorder
            />
            <Services
              name="WhatsApp"
              img={Check}
              dataTip="Operando"
              hasBorder
            />
            <Services
              name="WhatsApp Business API"
              dataTip="Operando"
              img={Check}
            />

          </div>
        </section>

        <section className="mt-16 max-w-5xl bg-white mx-auto">
          <div className="pt-6 px-12">
            <label>Tempo de Atividades dos Serviços</label>
          </div>

          <div className="px-10 py-10 w-auto">
              <Activity />
            <p className="text-sm text-gray-500 ml-2">90 dias atrás</p>
          </div>
        </section>

        <section id="incidentes" className="max-w-5xl mx-auto mt-20 px-4 lg:px-0">
          <label>Últimos Incidentes</label>

          <div className="bg-white px-4 md:px-10 lg:px-16 py-8 mt-6">
            <label className="font-bold text-sm">02 de Agosto 2020</label>

            <div className="flex inline-flex my-10">

              <div className="mr-8 md:self-start">
                <img className="w-12 md:w-8" src={Sidebar} alt="" />
              </div>

              <div className="w-full">
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
                  description="Devido a incidentes naturais houvera a presença da falta de energia na região por tempo não previsto, fazendo com que hajam paradas do fornecimento de  energia de forma segura, o que faz com que a cada período de 23horas seja obrigatório o reinício das atividades dos serviços prestados."
                  time="10 horas atrás"
                  isLast
                />
              </div>
            </div>
            <div className="border-b pb-6">
              <span className="text-sm text-gray-500 italic">Nenhum incidente do WhatsApp neste dia</span>
            </div>
          </div>

          <div className="bg-white px-4 py-4 md:px-16 md:py-8 ">
            <label className="font-bold text-sm">31 de Junho 2020</label>

            <div className="flex inline-flex my-10 border-b pb-8">

              <div className="mr-8 md:self-start">
                <img className="w-10 md:w-8" src={Sidebar} alt="" />
              </div>

              <div className="self-start w-full">
                <Incidentes
                  problem="Solução"
                  description="WhatsApp voltou a operar normalmente"
                  time="4 horas atrás"
                />
                <Incidentes
                  problem="Problema sendo monitorado"
                  description="O serviço está sendo restaurado para alguns países."
                  time="8 horas atrás"
                />
                <Incidentes
                  problem="WhatsApp Interrumpido"
                  description="O WhatsApp está passando por uma interrupção geral em todo o mundo. Não é possível usar o serviço porque o servidor está fora do ar."
                  time="10 horas atrás"
                  isLast
                />
              </div>
            </div>
          </div>

          <div className="bg-white px-16 mt-4 py-8">
            <label className="font-bold text-sm">30 de Junho 2020</label>
            <p className="text-sm text-gray-500 italic">Sem incidentes para este dia</p>
          </div>

        </section>

      </div>
    </>
  )
}

function Incidentes(props) {
  const { problem, description, time, isLast } = props
  return ( 
    <div className={`${isLast ? 'mb-0' : 'mb-6'}`}>
      <p className="text-sm mb-1 text-gray-900">{problem}</p>
      <p className="text-xs mb-4 text-gray-700">{description}</p>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  )
}

function Services(props) {
  const { name, img, hasBorder, dataTip } = props
  
  return (
    <div className={`${hasBorder ? 'border-b' : 'border-b-0'} mt-3 inline-flex justify-between w-full pb-5 `}>
      <span className="text-gray-600">{name}</span>
      <img className="w-6 h-6" src={img} alt="" data-tip={dataTip}/>
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