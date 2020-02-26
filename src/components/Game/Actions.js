import React from 'react'

import styles from './Actions.module.css'

const Actions = ({toggle, isRunning, setSpeed, reset }) => {
    const playLabel = isRunning ? 'Pause' : 'Play'
    const css = [styles.btn, styles.activeBtn].join(' ')
    const resetCSS = (!isRunning)
        ? css
        : [styles.btn, styles.readOnlyBtn].join(' ')

    return (
        <div>
            <button className={css} onClick={() => toggle()}>{playLabel}</button>
            <button className={resetCSS} onClick={() => reset()} disabled={isRunning}>Reset</button>
            <button className={css} onClick={() => setSpeed(100)}>High</button>
            <button className={css} onClick={() => setSpeed(500)}>Low</button>
        </div>
    )
}

export default Actions