import React from 'react'

const Actions = ({toggle, isRunning, reset, setSpeed }) => {
    const playLabel = isRunning ? 'Pause' : 'Play'

    const renderResetActions = () => {
        if (!isRunning)
            return <>
                Reset:<br />
                <button onClick={() => reset(80)}>Dense</button>
                <button onClick={() => reset(50)}>Average</button>
                <button onClick={() => reset(30)}>Sparse</button>
                </>
    }
    
    const renderSpeedActions = () => {
        return <>
            Speed:<br />
            <button onClick={() => setSpeed(100)}>High</button>
            <button onClick={() => setSpeed(500)}>Low</button>
        </>
    }

    return (
        <div>
            <div><button onClick={() => toggle()}>{playLabel}</button></div>
            <div>{renderResetActions()}</div>
            <div>{renderSpeedActions()}</div>
        </div>
    )
}

export default Actions