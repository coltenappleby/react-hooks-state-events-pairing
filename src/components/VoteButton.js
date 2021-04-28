import React, {useState} from 'react';

function Button({votes, emoji}) {

    let [currentVotes, setVotes] = useState(votes)

    function handleClick(){
        setVotes((currentVotes) => currentVotes + 1)

    }


    return (
        <button onClick ={handleClick}> {currentVotes}{emoji} </button>
    )

}

export default Button;