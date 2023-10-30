import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    // state
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    // control
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(e.target.value);
    };

    const handleUseClick = () => {
        setAttemptsLeft(attemptsLeft - 1);
    };

    const handleGainClick = () => {
        const parsed = parseInt(requestedAttempts, 10);
        if (!isNaN(parsed)) {
            setAttemptsLeft(attemptsLeft + parsed);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div> Attempts Left: {attemptsLeft}</div>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleInputChange}
                placeholder="RequestAttempts"
            />
            <button onClick={handleUseClick} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGainClick}>Gain</button>
        </div>
    );
}
