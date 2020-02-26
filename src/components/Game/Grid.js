import React from 'react'
import Cell from './Cell'

import styles from './Grid.module.css'

const Grid = ({ grid }) => {


    const renderRows = () => <>
        {grid.map((row, i) => renderRow(row, i))}
    </>

    const renderRow = (row, y) => <div key={`row-${y}`}>
        {row.map((cell, x) => <Cell key={`${y}_${x}`} on={cell} />)}
    </div>

    return (
        <div key="grid" className={styles.grid}>
            {renderRows()}
        </div>
    )
}

export default Grid;