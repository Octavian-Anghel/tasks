import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    // state
    const [userAnswer, setUserAnswer] = useState("");

    //control
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(e.target.value);
    };

    const isCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={handleChange}
                placeholder="Enter your name"
            />
            <div>Result: {userAnswer && (isCorrect ? "✔️" : "❌")}</div>
        </div>
    );
}
