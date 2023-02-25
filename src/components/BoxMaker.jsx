import React, { useState } from 'react';

const BoxMaker = (props) => {
    const [boxColor, setBoxColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.blah(boxColor);
    };

    return(
        <form onSubmit={ handleSubmit }>
            <input type="text" name="bColor" id="bColor" onChange={(e)=> setBoxColor(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );

};
export default BoxMaker;