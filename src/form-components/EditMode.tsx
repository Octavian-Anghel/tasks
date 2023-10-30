import React, { useState, useEffect, useRef } from "react";
import Switch from "@mui/material/Switch";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);
    const switchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (switchRef.current) {
            const switchRoot = switchRef.current;
            const inputParent = switchRoot.querySelector("input")?.parentNode;
            if (inputParent && inputParent instanceof HTMLElement) {
                inputParent.classList.add("form-switch");
            }
        }
    }, []);

    const handleModeChange = () => {
        setEditMode(!editMode);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsStudent(e.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <div ref={switchRef}>
                <Switch checked={editMode} onChange={handleModeChange} />
            </div>
            {editMode ? (
                <div>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
                        placeholder="Enter your name"
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                        Student
                    </label>
                </div>
            ) : (
                <div>
                    {userName} is {isStudent ? "" : "not "}a student
                </div>
            )}
        </div>
    );
}
