import React from "react"
import {useState} from 'react'

function Comments({comments}){
const [isHide,setIsHide] = useState('false')
function handleClick(e){
    setIsHide(isHide=> !isHide)
    
}

    return (
        <div> 
            <h2>2 Comments</h2>
            <button onClick={handleClick}>{isHide? "Show Comments":"Hide Comments" }</button>
            {isHide? "" : comments.map((el)=>{
                return <h3  key={el.id} >
                    {el.user}
                <h3 key={el.id} >{el.comment}</h3>
                </h3>
            })}
            
                
            
        </div>
    )
}

export default Comments