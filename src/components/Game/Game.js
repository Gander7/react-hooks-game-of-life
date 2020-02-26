import React, { useState, useEffect } from 'react'

import Grid from './Grid'
import Actions from './Actions'
import Stats from './Stats'

const Game = () => {
    const width = 80
    const height = 50
    const [ generation, setGeneration ] = useState(1)
    const [ intervalId, updateIntervalId ] = useState(null)

    const seed = (grid) => {
        let seededArr = grid.map(row => row.slice())
        seededArr = seededArr.map(row => row.map(cell => {
            return { on: (Math.floor(Math.random() * 4) === 1)}
        }))
        return seededArr
    }

    const evolve = () => {
        setGeneration(generation + 1)
    }

    useEffect(() => {
        clearInterval(intervalId)
        const id = setInterval(evolve, 100)
        updateIntervalId(id)
    }, [generation])

    return (
        <div className="gameContainer">
            <Actions />
            <Grid 
                width={width} 
                height={height}
                seed={seed}
            />
            <Stats generation={generation} />
        </div>
    )
}

export default Game