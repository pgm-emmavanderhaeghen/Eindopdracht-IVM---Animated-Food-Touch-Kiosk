import React, { useState } from 'react'
import Button from '../Button/Button'

const Counter = () => {
    const [count, setCount] = useState(1);
    const handleClick = (a) => {
        setCount(count + a)
    }

    return (
        <div>
            <Button onClick={() => handleClick(-1)} variant="small" color="pink">
                -
            </Button>
            {count}
            <Button onClick={() => handleClick(1)} variant="small" color="pink">
                +
            </Button>
        </div>
    )
}

export default Counter