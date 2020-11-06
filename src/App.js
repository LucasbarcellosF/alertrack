import React from 'react'

import Graph from './components/images/Graph.svg'
import PieChart from './components/images/PieChart.svg'
import Sidebar from './components/images/Sidebar.svg'
import Progress from './components/images/Progress.svg'

import Activity from './components/base/ActivityBar'
import Navbar from './components/base/Navbar'
import Services from './components/base/sections/Services'
import Incidentes from './components/base/sections/Incidentes'

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

      <div className="bg-gray-200">
        <div className="py-4 mx-auto max-w-5xl">

          <div className="mt-16 max-w-5xl px-4 lg:px-0">
            <img className="w-full object-cover" src={Graph} alt="Grafico" />
          </div>

          <section className="max-w-5xl flex flex-col md:flex-row sm:space-x-2 space-y-2 sm:space-y-0 mt-8 justify-center px-4 lg:px-0">
            <div className="border pt-12 pb-20 bg-white w-full" style={{maxHeight: '418px'}}>
              <div className="flex justify-center mb-6">
                <p className="text-lg">Brasil</p>
              </div>
              <img className="mx-auto" src={PieChart} alt="Grafico de Pizza"/>
              <img src={Progress} className="mt-6 mx-auto" alt="Progresso"/>
            </div>

            <Services/>
          </section>

          <section className="mt-16 max-w-5xl bg-white px-4 lg:px-0">
            <div className="pt-6 px-12">
              <label>Tempo de Atividades dos Serviços</label>
            </div>

            <div className="px-10 py-10 overflow-x-scroll md:overflow-hidden">
                <Activity />
              <p className="text-sm text-gray-500 ml-2">90 dias atrás</p>
            </div>
          </section>

          <section id="incidentes" className="max-w-5xl mt-20 px-4 lg:px-0">
            <label>Últimos Incidentes</label>

            <div className="bg-white px-4 md:px-10 lg:px-16 py-8 mt-6">
              <label className="font-bold text-sm">02 de Agosto 2020</label>

              <div className="inline-flex my-10">

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

            <div className="bg-white px-4 py-4 md:px-16 md:py-8">
              <label className="font-bold text-sm">31 de Junho 2020</label>

              <div className="inline-flex my-10 border-b pb-8">

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
      </div>
    </>
  )
}




