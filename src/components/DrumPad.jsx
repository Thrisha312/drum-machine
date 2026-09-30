import React, { useRef, useState } from "react";

function DrumPad({ sound, volume, power, onPlay }) {
    const audioRef = useRef(null);
    const [active, setActive] = useState(false);

    const playSound = () => {
        if (!power) return;

        const audio = audioRef.current;

        audio.currentTime = 0;
        audio.volume = volume / 100;
        audio.play();

        setActive(true);
        onPlay(sound.name);

        setTimeout(() => {
            setActive(false);
        }, 150);
    };

    return (
        <button
    data-key={sound.key}
    className={`drum-pad ${active ? "active" : ""}`}
            onClick={playSound}
        >
            <span>{sound.key}</span>
            <small>{sound.name}</small>

            <audio
                ref={audioRef}
                src={sound.file}
            />
        </button>
    );
}

export default DrumPad;