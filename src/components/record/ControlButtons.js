import React, { useState } from "react";

function ControlButtons(props) {
    const [isPaused, setIsPaused] = useState(false);

    const handlePauseToggle = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="Control-Buttons">
            <div className="d-flex justify-content-around">
                <div className="btn btn-outline-primary"
                    onClick={props.handlePauseResume && handlePauseToggle}>
                    {isPaused ? "Resume" : "Pause"}
                </div>
                <div className="btn btn-outline-danger"
                    onClick={props.handleStop}>Stop</div>
                <div className="btn btn-outline-warning"
                    onClick={props.handleUndo}>Undo</div>
            </div>
        </div>
    );
}

export default ControlButtons;