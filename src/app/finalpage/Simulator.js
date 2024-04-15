import React, { useEffect, useState } from 'react';


const Simulator = () => {
    const [simulations, setCards] = useState([]);

    const getSimulator = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/simulations/", {
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed to fetch Topics");
            }

            const data = await res.json();
            // Assuming the API returns an object with a `cards` property
            // If the API directly returns an array, use setCards(data)
            setCards(data.simulations);

        } catch (error) {
            console.log("Error loading topics: ", error);
        }
    };

    useEffect(() => {
        getSimulator();
    }, []);

    // Check if cards is undefined before mapping
    if (!simulations) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {simulations.map((t, index) => (
                <div key={t.id || index}>
                    <div>
                        <div>{t.simulationdata}</div>
                    </div>
                </div>
            ))}
            <iframe
                src="/ch11pr1/index.html" // Adjust the URL as necessary
                title="Tic Tac Toe Game"
                width="800"
                height="450"
                style={{ border: 'none' }}
            />
        </div>
    );
}



export default Simulator;


