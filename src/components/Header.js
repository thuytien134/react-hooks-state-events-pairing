import React from "react"


function Header({data}){
    return (
        <div>
            <h1>{data.title}</h1>
            <h3>{data.views} Views : Updated {data.createdAt} </h3>
        </div>
    )
}

export default Header