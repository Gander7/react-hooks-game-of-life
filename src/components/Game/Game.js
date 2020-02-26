import React from 'react'

import Grid from './Grid'
import Actions from './Actions'
import Stats from './Stats'

const Game = () => {
    const width = 80
    const height = 50

    return (
        <div className="gameContainer">
            <Actions />
            <Grid width={width} height={height}/>
            <Stats />
        </div>
    )
}

export default Game