import React from 'react';



export default function Intro(props) {
    return (
        <div>
              <p className="App-intro">
        {props.message}
    </p> 
        </div>
    )
}
