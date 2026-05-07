import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
    const [seconds, setSeconds] = useState(0);
    const[isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval = null;

        if (isRunning){
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const time = seconds.toString().padStart(6, "0");

    return (
        <div className="text-center">
			<div className="counter-container">
				<div className="digit">
					<i className="fa-regular fa-clock"></i>
				</div>

				{time.split("").map((num, i) => (
					<div key={i} className="digit">{num}</div>
				))}
			</div>

		
			<div className="mt-4">
				<button className="btn btn-success mx-2" onClick={() => setIsRunning(true)}>
					Start
				</button>

				<button className="btn btn-danger mx-2" onClick={() => setIsRunning(false)}>
					Stop
				</button>

				<button className="btn btn-warning mx-2" onClick={() => {
					setSeconds(0);
					setIsRunning(false);
				}}>
					Reset
				</button>
			</div>
		</div>
    )
}

export default SecondsCounter;