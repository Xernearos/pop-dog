import React,{Component} from "react"
import cat from './cat-350-467.png'
import './Content.css'

var clicks = 0;
function myfunction(){
    clicks+=1;
    console.log(clicks);
}
export default ({ children }) => (
    <div className='Content'>
        <button onClick={myfunction}>
            <img src={cat}/> 
        </button>
        <a class=''>Click Times = {clicks} </a>
    </div>
)
