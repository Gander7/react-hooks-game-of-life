import React from 'react'

import Grid from './Grid'
import Actions from './Actions'
import Stats from './Stats'

const Game = () => {
    const width = 80
    const height = 50

    const seed = (grid) => {
        let seededArr = grid.map(row => row.slice())
        seededArr = seededArr.map(row => row.map(cell => {
            return { on: (Math.floor(Math.random() * 4) === 1)}
        }))
        return seededArr
    }

    return (
        <div className="gameContainer">
            <Actions />
            <Grid 
                width={width} 
                height={height}
                seed={seed}
            />
            <Stats />
        </div>
    )
}

export default Game