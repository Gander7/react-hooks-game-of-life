import React from 'react'

const Actions = ({toggle, isRunning}) => {
    const playLabel = isRunning ? 'Pause' : 'Play'
    return (
        <div>
            <button onClick={() => toggle()}>{playLabel}</button>
        </div>
    )
}

export default Actions