import React from "react";

function Display({ message, volume, power }) {
    return (
        <div className="display">
            <h2>{message}</h2>

            <p>
                Volume: {volume}%
            </p>

            <p>
                System: {power ? "ON" : "OFF"}
            </p>
        </div>
    );
}

export default Display;