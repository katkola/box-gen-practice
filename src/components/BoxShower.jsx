import React from "react";

const BoxShower = (props) =>  {

    const dimensionList = props.someBoxes;
    
    return(
        <>
            <div className="boxContainer">
                {
                    dimensionList.map((box,idx) =>(
                        <div style={{backgroundColor: box}} key={idx} className="lilBox">
                            <p>test {box}</p>
                        </div>
                    ))
                }
                
            </div>
        </>
    );

}
export default BoxShower;