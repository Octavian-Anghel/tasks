import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays = ["🎃", "🎏", "🪔", "🦃", "🎄"];
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);

    const advanceByAlphabet = () => {
        const nextIndex = (currentHolidayIndex + 1) % holidays.length;
        setCurrentHolidayIndex(nextIndex);
    };

    const advanceByYear = () => {
        const nextIndex = (currentHolidayIndex + 1) % holidays.length;
        setCurrentHolidayIndex((currentHolidayIndex + 1) % holidays.length);
    };

    const currentHoliday = holidays[currentHolidayIndex];

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
