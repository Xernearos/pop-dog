import React from "react"
import "./Header.css"

export default ({ children }) => (
    <div className='Header'>
        <a>Choose Team :</a>
        <div className='Teams'>
            <button onClick={console.log('Team Red.')}>
                <a style={{color:'#FF7F7F'}}>Red</a>
            </button>
        </div>
        <div className='Teams'>
            <button onClick={console.log('Team Blue.')}>
                <a style={{color:'#ADD8E6'}}>Blue</a>
            </button>           
        </div>
        <div className='Teams'>
            <button onClick={console.log('Team Yellow.')}>
                <a style={{color:'#ffff80'}}>Yellow</a>
            </button>
        </div>
    </div>
)
