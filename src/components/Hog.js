import React, { useState } from "react";

function Hog({ greased, award, name, specialty, weight, pic }) {
    const [showAttributes, setshowAttributes] = useState(false)
    function handleHogClick(event){
        setshowAttributes(
            !showAttributes
        )
        console.log(event)
    }

    return(
        <div className="pigTile" onClick={handleHogClick}>
            <h3 style={{color: 'red', fontSize: '30px'}}>{name}</h3>
            <img src={pic} alt={name} />
            {showAttributes ? 
            <ul>
                <li>Weight: {weight} tons</li>
                <li className ='achievementText'>Highest Achievement: {award}</li>
                <li>Skill: {specialty}</li>
                <li>{greased ? "GREASY" : "Clean"}</li>
            </ul> :
            null}
        </div>
    )
}

export default Hog;