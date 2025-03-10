import React, {useState} from 'react';

function Second(props) {
    const [my_age, setMy_age] = useState(28);
    const [message, setMessage] = useState("")

    function age_handler(e)
    {
        setMy_age(e.target.value)
    }

    function getMessage(){
        if(my_age>40)
        {
            setMessage("You are old")
        }else
        {
            setMessage("You are young")
        }
    }
    return (
        <div><h1>Name:
            <span>{props.my_name}
            </span>
        </h1>
        <p>My age: <span>{my_age}</span></p>
            <input type="text" onChange={age_handler} value={my_age}/>
           <p>{message}</p>
            <button onClick={getMessage}>Get Message</button>
        </div>
    );
}

export default Second;