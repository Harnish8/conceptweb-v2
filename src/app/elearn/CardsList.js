import React from "react";

import img1 from './images/Activity.jpg';
import Image from 'next/image';
import Link from 'next/link';

// export default function CardsList() {
//     return (
//             <div>
//                 <h2>Card Title</h2>
//                 <div>Card Description</div>
//             </div>
        
//     );
// }



const getCards = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/cards/", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch Topics");
        }

        return res.json();

    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};



const CardsList = async () => {

    const { cards } = await getCards();
    return (
        cards.map((t, index) => (
            // <div key={t.id || index}>
            //     <div>
            //         <div>{t.cardtitle}</div>
            //         <div>{t.carddescription}</div>
            //     </div>

            // </div>

            <div key={t.id || index}
             className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 d-inline-block mt-5">
                <Link href="#">
                    <Image className="rounded-t-lg" src={img1} alt="" style={{ width: "100%" }} />
                </Link>
                <div className="p-5">
                    <Link href="#">
                        <h6 className="mb-2 text-2xl font-bold tracking-tight">{t.cardtitle}</h6>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{t.carddescription}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{t.cardimg}</p>
                    {/* <Link href={props.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link> */}
                </div>
            </div>
        ))


    );
}


export default CardsList;
