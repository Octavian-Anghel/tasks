import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState(1);
    const [rightDie, setRightDie] = useState(2);
    const [gameResult, setGameResult] = useState<string | null>(null);

    const rollLeft = () => {
        const newValue = d6();
        setLeftDie(newValue);
        checkGameResult(newValue, rightDie);
    };

    const rollRight = () => {
        const newValue = d6();
        setRightDie(newValue);
        checkGameResult(leftDie, newValue);
    };

    const checkGameResult = (leftValue: number, rightValue: number) => {
        if (leftValue === rightValue && leftValue === 1) {
            setGameResult("You lose!");
        } else if (leftValue === rightValue) {
            setGameResult("You win!");
        } else {
            setGameResult(null); // Reset the game result
        }
    };

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <br />
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {gameResult && <div data-testid="game-result">{gameResult}</div>}
        </div>
    );
}
