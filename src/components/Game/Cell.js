import React from 'react'

import styles from './Cell.module.css'

const Cell = React.memo(({on}) => {
    const css = on ? styles.on : styles.off 
    return <div 
        className={[styles.cell, css].join(' ')} 
    />
})

export default Cell