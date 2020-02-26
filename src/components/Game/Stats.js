import React from 'react'

const Stats = ({ generation, speed }) => {
    const spd = speed <= 100 ? 'Fast' : 'Slow'
    return (
        <h2>
            Generation: {generation}, Speed: {spd}
        </h2>
    )
}

export default Stats;