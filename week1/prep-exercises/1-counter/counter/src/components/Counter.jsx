import { useState } from 'react';
import Count from './Count';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0);
    const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';
    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        }
    };

    return (
        <div>
            <h1>{feedback}</h1>
            <Count count={count} />
            <Button text="Add 1!" onClick={increment} />
            <Button text="Subtract 1!" onClick={decrement} />
        </div>
    );
};

export default Counter;
