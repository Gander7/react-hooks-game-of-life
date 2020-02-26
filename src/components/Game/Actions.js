import React from 'react'

const Actions = ({toggle, renderReset, isRunning, reset, setSpeed }) => {
    const playLabel = isRunning ? 'Pause' : 'Play'
    return (
        <div>
            <button onClick={() => toggle()}>{playLabel}</button>
            {renderReset() && <button onClick={() => reset()}>Reset</button>}
            Speed:
            <button onClick={() => setSpeed(100)}>High</button>
            <button onClick={() => setSpeed(500)}>Low</button>
        </div>
    )
}

export default Actions