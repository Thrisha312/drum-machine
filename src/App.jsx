import React, { useEffect, useState } from "react";
import DrumPad from "./components/DrumPad";
import Display from "./components/Display";
import soundBank from "./data/soundBank";

function App() {
    const [volume, setVolume] = useState(70);
    const [power, setPower] = useState(true);
    const [display, setDisplay] = useState("READY");

    const playSound = (sound) => {
        if (!power) return;

        setDisplay(sound);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            const sound = soundBank.find(
                (item) =>
                    item.key.toLowerCase() ===
                    event.key.toLowerCase()
            );

            if (sound) {
    const pad = document.querySelector(
        `[data-key="${sound.key}"]`
    );

    if (pad) {
        pad.click();
    }
}
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [power]);

    return (
        <div className="drum-machine">

            <h1>DRUM MACHINE</h1>

            <Display
                message={display}
                volume={volume}
                power={power}
            />

            <div className="controls">

                <label>
                    Volume: {volume}%
                </label>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) =>
                        setVolume(Number(e.target.value))
                    }
                />

                <button
                    onClick={() =>
                        setPower(!power)
                    }
                >
                    {power
                        ? "POWER ON"
                        : "POWER OFF"}
                </button>

            </div>

            <div className="drum-grid">

                {soundBank.map((sound) => (
                    <DrumPad
                        key={sound.key}
                        sound={sound}
                        volume={volume}
                        power={power}
                        onPlay={playSound}
                    />
                ))}

            </div>

        </div>
    );
}

export default App;