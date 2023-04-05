import React, { useState } from "react";
import Hog from "./Hog";

function HogList({ hogs }) {
    const [alphaHogs, setAlphaHogs] = useState('name')
    const [grease, setGrease] = useState(false)

    function handleAlphaClick() {
        setAlphaHogs('name')
    }

    function handleWeightClick() {
        setAlphaHogs('weight')
    }

    function handleGrease() {
        setGrease(!grease)
    }
    const orderedHogs = hogs
        .filter(hog=>grease ? hog.greased : true)
        .sort((hog1, hog2) => {
            if (alphaHogs === "name") {
                        const hogA = hog1.name.toUpperCase()
                        const hogB = hog2.name.toUpperCase()
                        if (hogA < hogB) {
                            return -1;
                          }
                          if (hogA > hogB) {
                            return 1;
                          }}
            else {return hog1.weight < hog2.weight ? -1 : 1}
        })
    return (
        <div>
            <h1>All The Hogs!!</h1>
            <hr/>
            <label style={{fontWeight: 'bold'}}>Sort By</label>
            <br/>
            <button onClick={handleAlphaClick}>Alphabetize</button> <button onClick={handleWeightClick}>Weight</button>
            <br/>
            <button onClick={handleGrease}>Want GREASE w/ that?</button>
            <div className="hogCards">
                {orderedHogs.map((hog) => (
                    <Hog 
                        key={hog.name} 
                        greased={hog.greased} 
                        award={hog['highest medal achieved']} 
                        pic={hog.image} 
                        name={hog.name} 
                        specialty={hog.specialty} 
                        weight={hog.weight} 
                    />
                ))}
            </div>
        </div>
    )
}

export default HogList