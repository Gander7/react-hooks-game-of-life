import React from 'react'

const Actions = ({toggle, renderReset, isRunning, reset, setSpeed }) => {
    const playLabel = isRunning ? 'Pause' : 'Play'

    const renderResetActions = () => {
        if (renderReset())
            return <>
                Reset:
                <button onClick={() => reset(80)}>Dense</button>
                <button onClick={() => reset(50)}>Average</button>
                <button onClick={() => reset(30)}>Sparse</button>
                </>
    }
    
    const renderSpeedActions = () => {
        return <>
            Speed:
            <button onClick={() => setSpeed(100)}>High</button>
            <button onClick={() => setSpeed(500)}>Low</button>
        </>
    }

    return (
        <div>
            <button onClick={() => toggle()}>{playLabel}</button>
            {renderResetActions()}
            {renderSpeedActions()}
        </div>
    )
}

export default Actions