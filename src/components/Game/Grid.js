import React, { useState } from 'react'
import Cell from './Cell'

import styles from './Grid.module.css'

const Grid = ({ width, height }) => {

    const [ grid ] = useState(Array(height).fill().map(() => Array(width).fill({ on: false })))

    const renderRows = () => <>
        {grid.map((row, i) => renderRow(row, i))}
    </>

    const renderRow = (row, rowNum) => <>
        {row.map((cell, i) => <Cell y={rowNum} x={i} {...cell} />)}
        <br />
    </>

    return (
        <div key="grid" className={styles.grid}>
            {renderRows()}
        </div>
    )
}

export default Grid;