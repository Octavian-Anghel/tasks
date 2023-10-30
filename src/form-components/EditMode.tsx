import React, { useState } from "react";
import Switch from "@mui/material/Switch";

export function EditMode(): JSX.Element {
    // state
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    // control

    const handleModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditMode(e.target.checked);
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
            <Switch checked={editMode} onChange={handleModeChange} />
            {editMode ? (
                <div>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
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
