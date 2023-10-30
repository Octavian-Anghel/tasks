import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    // state
    const [selectedChoice, setSelectedChoice] = useState(options[0]);

    // control
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChoice(e.target.value);
    };

    const isCorrect = selectedChoice === expectedAnswer;
    // view
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedChoice} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>Result: {isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
