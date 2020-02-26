import React from 'react'

import styles from './Cell.module.css'

const Cell = ({x, y, on}) => {
    const css = on ? styles.on : styles.off 
    return <div 
        key={`${y}_${x}`}
        className={[styles.cell, css].join(' ')} 
    />
}

export default Cell