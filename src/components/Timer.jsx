import { useState } from 'react';

export default function Timer(props) {

    const [count, setCount] = useState(props.startTime);

    //useEffect is better than setCount but next time :)

    setTimeout(() => {
        setCount(count + 1);
    }, 1000);

    return(
        <div>
            <h2>Timer</h2>
            <p>{count}</p>
        </div>
    )
}