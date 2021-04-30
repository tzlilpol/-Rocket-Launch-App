import React,{ useState,useEffect,useContext } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
import LaunchContext from '../context/LaunchContext'



function FavoriteButton(props) {
    const {addLuanch,removeLuanch,findLaunch} =useContext(LaunchContext);
    const [isFav,SetFav] =useState(props.launch.fav);
    const [starColor,setColor] =useState('white')

    const addToFav=(item)=>{
        SetFav(true)
        props.launch.fav=true
        addLuanch(item)
    }
    const removeFav=(item)=>{
        props.launch.fav=false
        removeLuanch(item.id)
    }
    const findFav=(item)=>{
        const res=findLaunch(item.id)
        
        if (res==false){
            addToFav(item)
            setColor('rgb(245,245,0)')
        }
        else{
            removeFav(item)
            setColor('white')
        }
    }
    
        useEffect(() => {
            const res=findLaunch(props.launch.id)
            if (res==true){
                setColor('rgb(245,245,0)')
                SetFav(true)

            }
            else{
                setColor('white')
                SetFav(false)
            }
        },[])
    return (
            <View>
            <TouchableOpacity onPress={()=>{findFav(props.launch)} }>
            <Avatar.Icon {...props} icon="star" style={{backgroundColor:'rgb(51,146,255)'}} round size={35} color={starColor} />
            
            </TouchableOpacity>
            </View>
    );
}

export default FavoriteButton;