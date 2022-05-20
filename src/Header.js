import "./Header.css"
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native';

export default ({ children }) => (
    <div className='Header'>
        <Team></Team>
    </div>
    
)

const Team = () =>{
    const [team, setTeam] = useState('Red');
    return(
        <View style={{display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
            <a style={{padding:'0px 30px 0px 0px'}}>Choose Team :</a>
            <TouchableOpacity 
                onPress={() => {setTeam("Red")}}
                style={{color:'#FF7F7F',flexWrap:'wrap',padding:'10px',margin:'10px'}}>
                Red
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {setTeam("Blue")}}
                style={{color:'#ADD8E6',flexWrap:'wrap',padding:'10px',margin:'10px'}}>
                Blue
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {setTeam("Yellow")}}
                style={{color:'#ffff80',flexWrap:'wrap',padding:'10px',margin:'10px'}}>
                Yellow
            </TouchableOpacity>
            <Text
                style={{padding:'0px 0px 0px 30px',color:'white',fontSize:'15px'}}>
                Now : {team}
            </Text>
        </View>
    )
    
}