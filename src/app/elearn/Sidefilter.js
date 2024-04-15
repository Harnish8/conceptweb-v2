

import React, { useState, useEffect } from 'react';
import Homecard from './Homecard';

import img1 from './images/Activity.jpg';
import img2 from './images/Simulation.jpg';

const Sidefilter = () => {
    // State to manage the sidebar's visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // State to store the fetched cards
    const [cards, setCards] = useState([]);

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Function to fetch cards
    const fetchCards = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/cards/", {
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed to fetch Topics");
            }

            const data = await res.json();
            setCards(data.cards); // Assuming the API returns an object with a `cards` property

        } catch (error) {
            console.log("Error loading topics: ", error);
        }
    };

    // Fetch cards when the component mounts
    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <>
            {/* {cards.map((t, index) => (
                // Your existing JSX here, using `t` to access each card's data
                <span className="ms-3">{t.cardtitle}</span>
            ))} */}




            <button onClick={toggleSidebar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <div className="row">
                <div className="col-2">
                    <aside id="default-sidebar" className={`top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
                        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 mt-3">
                            <ul className="space-y-2 font-medium">
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                        <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 52 52">
                                            <path d="M46.2,38.9L27.4,49.6c-1,0.6-2.3,0.6-3.3,0L5.4,38.9c-0.8-0.4-0.8-1.4,0-1.8l4.4-2.5c0.3-0.2,0.7-0.2,1,0  l11.4,6.5c1.1,0.6,2.3,0.9,3.6,0.9s2.5-0.3,3.6-0.9l11.4-6.5c0.3-0.2,0.7-0.2,1,0l4.4,2.5C47,37.5,47,38.5,46.2,38.9z" />
                                            <path d="M46.2,26.9L27.4,37.6c-1,0.6-2.3,0.6-3.3,0L5.4,26.9c-0.8-0.4-0.8-1.4,0-1.8l4.4-2.5c0.3-0.2,0.7-0.2,1,0  l11.4,6.5c1.1,0.6,2.3,0.9,3.6,0.9s2.5-0.3,3.6-0.9l11.4-6.5c0.3-0.2,0.7-0.2,1,0l4.4,2.5C47,25.5,47,26.5,46.2,26.9z" />
                                            <path d="M24.3,25.6L5.5,14.9c-0.8-0.4-0.8-1.4,0-1.8L24.3,2.4c1-0.6,2.3-0.6,3.3,0l18.8,10.7c0.8,0.4,0.8,1.4,0,1.8  L27.6,25.6C26.6,26.1,25.3,26.1,24.3,25.6z" />
                                        </svg>
                                        <span className="ms-3">MEDIUM</span>
                                    </a>


                                    
                                        
                                        <div>
                                            <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">English</label>
                                        </div>
                                        <div>
                                            <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gujarati</label>
                                        </div>
                                        <div>
                                            <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hindi</label>
                                        </div>


                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                        <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 52 52">
                                            <path d="M46.2,38.9L27.4,49.6c-1,0.6-2.3,0.6-3.3,0L5.4,38.9c-0.8-0.4-0.8-1.4,0-1.8l4.4-2.5c0.3-0.2,0.7-0.2,1,0  l11.4,6.5c1.1,0.6,2.3,0.9,3.6,0.9s2.5-0.3,3.6-0.9l11.4-6.5c0.3-0.2,0.7-0.2,1,0l4.4,2.5C47,37.5,47,38.5,46.2,38.9z" />
                                            <path d="M46.2,26.9L27.4,37.6c-1,0.6-2.3,0.6-3.3,0L5.4,26.9c-0.8-0.4-0.8-1.4,0-1.8l4.4-2.5c0.3-0.2,0.7-0.2,1,0  l11.4,6.5c1.1,0.6,2.3,0.9,3.6,0.9s2.5-0.3,3.6-0.9l11.4-6.5c0.3-0.2,0.7-0.2,1,0l4.4,2.5C47,25.5,47,26.5,46.2,26.9z" />
                                            <path d="M24.3,25.6L5.5,14.9c-0.8-0.4-0.8-1.4,0-1.8L24.3,2.4c1-0.6,2.3-0.6,3.3,0l18.8,10.7c0.8,0.4,0.8,1.4,0,1.8  L27.6,25.6C26.6,26.1,25.3,26.1,24.3,25.6z" />
                                        </svg>
                                        <span className="ms-3">STANDARD</span>
                                    </a>


                                    {cards.map((t, index) => (
                                        // Your existing JSX here, using `t` to access each card's data
                                        <div key={t.id || index}>
                                            <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t.cardtitle}</label>
                                        </div>
                                    ))}

                                    
                                

                                    









                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                        <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 52 52">
                                            <path d="M46.2,38.9L27.4,49.6c-1,0.6-2.3,0.6-3.3,0L5.4,38.9c-0.8-0.4-0.8-1.4,0-1.8l4.4-2.5c0.3-0.2,0.7-0.2,1,0  l11.4,6.5c1.1,0.6,2.3,0.9,3.6,0.9s2.5-0.3,3.6-0.9l11.4-6.5c0.3-0.2,0.7-0.2,1,0l4.4,2.5C47,37.5,47,38.5,46.2,38.9z" />
                                            <path d="M46.2,26.9L27.4,37.6c-1,0.6-2.3,0.6-3.3,0L5.4,26.9c-0.8-0.4-0.8-1.4,0-1.8l4.4-2.5c0.3-0.2,0.7-0.2,1,0  l11.4,6.5c1.1,0.6,2.3,0.9,3.6,0.9s2.5-0.3,3.6-0.9l11.4-6.5c0.3-0.2,0.7-0.2,1,0l4.4,2.5C47,25.5,47,26.5,46.2,26.9z" />
                                            <path d="M24.3,25.6L5.5,14.9c-0.8-0.4-0.8-1.4,0-1.8L24.3,2.4c1-0.6,2.3-0.6,3.3,0l18.8,10.7c0.8,0.4,0.8,1.4,0,1.8  L27.6,25.6C26.6,26.1,25.3,26.1,24.3,25.6z" />
                                        </svg>
                                        <span className="ms-3">SUBJECT</span>
                                    </a>

                                    

                                    {cards.map((t, index) => (
                                        // Your existing JSX here, using `t` to access each card's data
                                        <div key={t.id || index}>
                                            <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t.cardtitle}</label>
                                        </div>
                                    ))}

                                    



                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                        <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 52 52">
                                            <path d="M46.2,38.9L27.4,49.6c-1,0.6-2.3,0.6-3.3,0L5.4,38.9c-0.8-0.4-0.8-1.4,0-1.8l4.4-2.5c0.3-0.2,0.7-0.2,1,0  l11.4,6.5c1.1,0.6,2.3,0.9,3.6,0.9s2.5-0.3,3.6-0.9l11.4-6.5c0.3-0.2,0.7-0.2,1,0l4.4,2.5C47,37.5,47,38.5,46.2,38.9z" />
                                            <path d="M46.2,26.9L27.4,37.6c-1,0.6-2.3,0.6-3.3,0L5.4,26.9c-0.8-0.4-0.8-1.4,0-1.8l4.4-2.5c0.3-0.2,0.7-0.2,1,0  l11.4,6.5c1.1,0.6,2.3,0.9,3.6,0.9s2.5-0.3,3.6-0.9l11.4-6.5c0.3-0.2,0.7-0.2,1,0l4.4,2.5C47,25.5,47,26.5,46.2,26.9z" />
                                            <path d="M24.3,25.6L5.5,14.9c-0.8-0.4-0.8-1.4,0-1.8L24.3,2.4c1-0.6,2.3-0.6,3.3,0l18.8,10.7c0.8,0.4,0.8,1.4,0,1.8  L27.6,25.6C26.6,26.1,25.3,26.1,24.3,25.6z" />
                                        </svg>
                                        <span className="ms-3">CHAPTER</span>
                                    </a>

                                    
                                    {cards.map((t, index) => (
                                        // Your existing JSX here, using `t` to access each card's data
                                        <div key={t.id || index}>
                                            <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t.cardtitle}</label>
                                        </div>

                                    ))}

                                    {/* <div>
                                        <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ch-1</label>
                                    </div>
                                    <div>
                                        <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ch-2</label>
                                    </div>
                                    <div>
                                        <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ch-3</label>
                                    </div> */}



                                </li>



                            </ul>
                        </div>
                    </aside>
                </div>

                    <div className="col-10">
                            <div className={`p-4 ${isSidebarOpen ? 'sm:ml-64' : ''} d-flex justify-evenly flex-wrap`}>
                                <Homecard testimg={img1} title={"Practical - 1"} desc={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} link={"../finalpage"}/>
                                <Homecard testimg={img2} title={"Practical - 2"} desc={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} link={"Actpage"}/>
                                <Homecard testimg={img1} title={"Practical - 3"} desc={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} link={"Actpage"}/>
                                <Homecard testimg={img2} title={"Practical - 4"} desc={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} link={"Actpage"}/>
                                <Homecard testimg={img1} title={"Practical - 5"} desc={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} link={"Actpage"}/>
                                <Homecard testimg={img2} title={"Practical - 6"} desc={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} link={"Actpage"}/>
                                <Homecard testimg={img2} title={"Practical - 6"} desc={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} link={"Actpage"}/>
                                <Homecard testimg={img2} title={"Practical - 6"} desc={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."} link={"Actpage"}/>
                            </div>
                    </div>
                
            </div>





        </>
    );
};

export default Sidefilter;




