import React, { useState,useEffect,useContext } from 'react';
import {WebView} from 'react-native-webview'
import FavoriteButton from '../components/FavoriteButton';

function WebViewScreen({navigation}) {


    const [wikiURL,setWikiURL] =useState('');

    const extrectURL=(launch)=>{
        if (launch.pad.wiki_url!=" "){
            setWikiURL(launch.pad.wiki_url)}

        else if (launch.program.wiki_url!=" ")
        {
            setWikiURL(launch.program.wiki_url)}
        else if (launch.wiki_url!=" ")
        {
            setWikiURL(launch.wiki_url)}
    }

    useEffect(()=>{
        const launch= navigation.getParam('launch')
        extrectURL(launch)
    },[]);
    
    return (
      
        <WebView 
        source={{uri: wikiURL}}
      />
    );
}


// Adding a **FavoriteButton** to the right side of the header and header **Title**
WebViewScreen.navigationOptions = navigationData =>{
    const launch= navigationData.navigation.getParam('launch')

    return {
        headerTitle: launch.name,
        headerRight:()=> {
            return (<FavoriteButton  launch={launch} ></FavoriteButton>)
        }
    }
}

export default WebViewScreen;