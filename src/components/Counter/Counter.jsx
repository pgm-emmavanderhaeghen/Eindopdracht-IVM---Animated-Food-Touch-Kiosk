import React, { useState } from 'react'
import { useEffect } from 'react';
import Button from '../Button/Button'

const Counter = ({number = 1, countChange}) => {
    const [count, setCount] = useState(number);
    const handleClick = (a) => {
        setCount(count + a)
    }
    useEffect(() => {
        if (typeof countChange === 'function') {
          countChange(count);
        }
      }, [count]);

    return (
        <div>
            <Button 
            onClick={() => handleClick(-1)} 
            variant="small" 
            color="pink">
                -
            </Button>
            {count}
            <Button 
            onClick={() => handleClick(1)} 
            variant="small" 
            color="pink">
                +
            </Button>
        </div>
    )
}

export default Counter