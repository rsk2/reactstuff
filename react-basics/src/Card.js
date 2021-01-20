import React, {useEffect, useState} from 'react'

const Card = (props) => {
    const logHello = () => console.log("Hello!");
    const [ value, setValue] = useState(0);
    useEffect (() => {
        console.log("call useeffect");
        if(value > 0)
            document.title = `New messages (${value})`;
        else
            document.title = 'My Inbox'
    })
    return(
        <div> <h1> {value}</h1> {props.name}
            <button onClick={logHello}>Log Hello</button>
            <button onClick={() => setValue(value + 1)}>Click me</button>
        </div>
    );
}

export default Card