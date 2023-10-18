import React from 'react'

export default function Rendering() {

    //example 1
    const isLoggedIn = false;

    //example 2
    const item = ["Apple", "Banana","Graps"];

    //example 3
    const isAuthonticated = false;
  return <>
  {isLoggedIn? <h2>Welcome User</h2> : <h2>Welcome Guest</h2>}

  <div>{item.length> 0 ? (
    <ul>
        {
        item.map((item,index) =>(
            <li key={index}>{item}</li>
        ))}
    </ul>
  ):(
<p>No items to Display</p>
  )}</div>


{/* example 3 */}

<div>{isAuthonticated && (
    <button onClick={()=> console.log("Logged out")}>Loggout</button>
)}</div>
  </>
}
