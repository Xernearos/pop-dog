import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from 'react-native';
import cat from './cat-350-467.png'
import './Content.css'

export default ({ children }) => (
    <div className='Content'>
        <Counter></Counter>
    </div>
)

const Counter = () => {
    const [count, setCount] = useState(0);   
    return (
        <View>
            <TouchableOpacity 
                style={{flexDirection:"row",alignItems:'center',justifyContent:'center'}}
                onPress={() => {setCount(count + 1)}}    
            >
                <img className="Image" src={cat}/> 
            </TouchableOpacity>
            <a 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                className='Word'
                >Click Times = {count} </a>
        </View>
    );
}
