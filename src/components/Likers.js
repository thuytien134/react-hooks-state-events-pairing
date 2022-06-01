import React from "react"
import { useState } from "react"

function Likers({ data }) {
    const [isUp, setIsup] = useState(0)
    const [isdown, setIsdown] = useState(0)
    function handleUp() {
        setIsup(isUp => isUp + 1)
    }
    function handleDown() {
        setIsdown(isdown => isdown + 1)
    }

    return (
        <>
            <div>
                <button onClick={handleUp}>{isUp} 👍</button>
                <button onClick={handleDown}>{isdown} 👎</button>
            </div>


        </>
    )
}

export default Likers