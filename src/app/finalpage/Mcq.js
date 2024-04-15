import React, { useEffect, useState } from 'react';

const Mcq = () => {
    const [simulations, setCards] = useState([]);

    const getMcq = async () => {
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
        getMcq();
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
                        <div>{t.mcqdata}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Mcq;
