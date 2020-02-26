import React, { useState, useEffect } from 'react'
import Cell from './Cell'

import styles from './Grid.module.css'

const Grid = ({ width, height, seed }) => {
    const [ grid, setGrid ] = useState(Array(height).fill().map(() => Array(width).fill({ on: false })))

    useEffect(() => {
        setGrid(seed(grid))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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