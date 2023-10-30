import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    // state
    const [chosenColor, setChosenColor] = useState("");

    const colors = [
        "Red",
        "Green",
        "Blue",
        "Yellow",
        "Purple",
        "Pink",
        "Orange",
        "Brown"
    ];

    //control
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChosenColor(e.target.value);
    };

    // view
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <label key={color} style={{ marginRight: "10px" }}>
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={chosenColor === color}
                            onChange={handleColorChange}
                        />
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: chosenColor,
                    color: "white",
                    display: "inline-block"
                }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
