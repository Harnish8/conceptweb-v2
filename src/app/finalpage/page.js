"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import Header from '../components/header';
import './css/style.css';

import Theory from './Theory';
import Animation from './Animation';
import Simulator from './Simulator';
import Mcq from './Mcq';
import Procedure from './Procedure';
import Animationimg from '../../../public/Animation.png';
import Simulationimg from '../../../public/Simulator.png';
import Theoryimg from '../../../public/Theory.png';
import Mcqimg from '../../../public/MCQ.png';
import Procedureimg from '../../../public/Procedure.png';

function Page() {
    
    useEffect(() => {
        const tabs = document.querySelectorAll('[role="tab"]');
        const panels = document.querySelectorAll('[role="tabpanel"]');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Hide all panels
                tabs.forEach(element => {
                    element.classList.add("border")
                    element.classList.remove("bg-white")
                });
                tab.classList.remove("border")
                tab.classList.add('text-gray-500', 'border-l', 'border-r', 'border-t',"bg-white")
                panels.forEach(panel => {
                    panel.classList.add('hidden');

                    panel.setAttribute('aria-hidden', 'true');
                });

                // Show the panel that corresponds to the clicked tab
                const panelId = tab.getAttribute('aria-controls');
                const panel = document.getElementById(panelId);
                panel.classList.remove('hidden');
                panel.setAttribute('aria-hidden', 'false');

            });
        });
    }, []);

    return (
        <>
            <Header />
            <div className="min-h-[88vh] m-4 mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">



                <nav className="flex pt-1" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse pl-4">
                        <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400">Projects</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <p className="text-3xl text-gray-900 pl-4">Practicle Name</p>

                <div className="m-4">
                    <div className="border-b">
                        <nav className="flex" aria-label="Tabs" role="tablist">
                            <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none active  border-l border-r border-t bg-white" id="card-type-tab-item-1" data-hs-tab="#card-type-tab-preview" aria-controls="card-type-tab-preview" role="tab">
                                <Image src={Animationimg} alt="Tab 1" width={20} height={15} />Animation
                            </button>
                            <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none" id="card-type-tab-item-2" data-hs-tab="#card-type-tab-2" aria-controls="card-type-tab-2" role="tab">
                                <Image src={Simulationimg} alt="Tab 2" width={20} height={15} />Simulation
                            </button>
                            <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none" id="card-type-tab-item-3" data-hs-tab="#card-type-tab-3" aria-controls="card-type-tab-3" role="tab">
                                <Image src={Theoryimg}  alt="Tab 3" width={20} height={15} />Theory
                            </button>
                            <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none" id="card-type-tab-item-4" data-hs-tab="#card-type-tab-4" aria-controls="card-type-tab-4" role="tab">
                                <Image src={Mcqimg}  alt="Tab 4" width={20} height={15} />Mcq's
                            </button>
                            <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none" id="card-type-tab-item-5" data-hs-tab="#card-type-tab-5" aria-controls="card-type-tab-5" role="tab">
                                <Image src={Procedureimg}  alt="Tab 5" width={20} height={15} />Procedure
                            </button>
                        </nav>
                    </div>

                    <div className="pt-3 border-l border-r border-b">
                        <div id="card-type-tab-preview" role="tabpanel" aria-labelledby="card-type-tab-item-1">
                            <Animation />
                        </div>
                        <div id="card-type-tab-2" className="hidden" role="tabpanel" aria-labelledby="card-type-tab-item-2">
                            <Simulator />
                        </div>
                        <div id="card-type-tab-3" className="hidden" role="tabpanel" aria-labelledby="card-type-tab-item-3">
                            <Theory />
                        </div>
                        <div id="card-type-tab-4" className="hidden" role="tabpanel" aria-labelledby="card-type-tab-item-4">
                            <Mcq />
                        </div>
                        <div id="card-type-tab-5" className="hidden" role="tabpanel" aria-labelledby="card-type-tab-item-5">
                            <Procedure />
                        </div>
                    </div>
                </div>


            </div>


            
        </>
    );
}

export default Page;

