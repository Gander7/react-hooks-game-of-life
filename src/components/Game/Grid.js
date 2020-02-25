import React, { useState } from 'react'
import Cell from './Cell'

const Grid = ({ width, height }) => {

    const [ grid ] = useState(Array(height).fill().map(() => Array(width).fill({ on: false })))

    const renderRows = () => <>
        {grid.map(row => renderRow(row))}
    </>

    const renderRow = (row) => <>
        {row.map(cell => <Cell {...cell} />)}
        <br />
    </>

    return (
        <div className="grid">
            {renderRows()}
        </div>
    )
}

export default Grid;