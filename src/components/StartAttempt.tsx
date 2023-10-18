import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [isQuizInProgress, setIsQuizInProgress] = useState(false);

    const startQuiz = () => {
        if (attempts > 0) {
            setIsQuizInProgress(true);
            setAttempts(attempts - 1);
        }
    };

    const stopQuiz = () => {
        setIsQuizInProgress(false);
    };

    const mulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={isQuizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isQuizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={isQuizInProgress}>
                Mulligan
            </Button>
            <div>Attempts left: {attempts}</div>
            <div>
                Quiz {isQuizInProgress ? "in progress" : "not in progress"}
            </div>
        </div>
    );
}
