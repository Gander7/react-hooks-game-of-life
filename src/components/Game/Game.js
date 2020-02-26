import React, { useState, useEffect } from 'react'
import useInterval from '../useInterval'

import Grid from './Grid'
import Actions from './Actions'
import Stats from './Stats'

const Game = () => {
    const width = 50
    const height = 50
    const [ generation, setGeneration ] = useState(1)
    const [ grid, setGrid ] = useState(Array.from({length: height}, ()=>Array.from({length: width}, () => false)))
    const [ running, setRunning ] = useState(false)
    const [ speed, setSpeed ] = useState(100)
    const [ density, setDensity ] = useState(60)

    const seed = (grid) => {
        let seededArr = grid.map(row => row.slice())
        seededArr = seededArr.map(row => row.map(cell => {
            return (Math.floor(Math.random() * 100) < density)
        }))
        return seededArr
    }

    const evolveGrid = (grid) => {
        let newArr = grid.map(row => row.slice())
         newArr = newArr.map((row, y) => row.map((cell, x) => {
            let count = 0
            if (y > 0 && grid[y-1][x]) count++  // above
            if (y > 0 && x > 0 && grid[y-1][x-1]) count++ // top left
            if (y > 0 && x < width-1 && grid[y-1][x+1]) count++ // top right

            if (x > 0 && grid[y][x-1]) count++ // left
            if (x < width-1 && grid[y][x+1]) count++ //right

            if (y < height-1 && grid[y+1][x]) count++ // bottom
            if (y < height-1 && x > 0 && grid[y+1][x-1]) count++ // bottom left
            if (y < height-1 && x < width-1 && grid[y+1][x+1]) count++ // bottom right

            //console.log(`${x}, ${y}: ${count}`)
            if(cell && (count < 2 || count > 3))
                return false
            if(!cell && count === 3)
                return true
            return cell
        }))
        return newArr
    }

    const evolve = () => {
        setGrid(evolveGrid(grid))
        setGeneration(generation + 1)
    }

    useEffect(() => {
        setGrid(seed(grid))
    }, [])

    useInterval(() => {
        if(running)
            evolve()
    }, speed)

    const toggleRunning = () => {
        setRunning(!running)
    }

    const reset = (newDensity) => {
        setRunning(false)
        setDensity(newDensity)
        setGrid(seed(grid))
        setGeneration(1)
    }

    return (
        <div className="gameContainer">
            <Actions 
                isRunning={running} 
                toggle={toggleRunning} 
                reset={reset} 
                setSpeed={setSpeed} 
            />
            <Grid grid={grid} />
            <Stats generation={generation} speed={speed} />
        </div>
    )
}

export default Game