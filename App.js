import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer } from 'react-navigation';
import SearchScreen from './src/Screen/SearchScreen';
import FavoriteScreen from './src/Screen/FavoriteScreen';
import { FontAwesome5 ,AntDesign } from '@expo/vector-icons';
import WebViewScreen from './src/Screen/WebViewScreen';
import {LaunchProvider} from './src/context/LaunchContext'

// React Navigation's stack navigator provides a way for app to transition between screens and manage navigation history
// **createStackNavigator** is a function that returns a React component. It takes a route configuration object and, optionally, an options object
// The **keys** in the route configuration object are the route names and the **values** are the configuration for that route
// **defaultNavigationOptions** set default conf for all screens
const navigator = createStackNavigator({
    Search: { screen: SearchScreen},
    WebView: {screen: WebViewScreen }
},
{
    initialRouteName:'Search',
    defaultNavigationOptions:{
        headerTitle:'Launches History'
    },   
}
);
// A stack navigator **for each** tab - FavNavigator and navigator
const FavNavigator = createStackNavigator({
    Favorites: { screen: FavoriteScreen},
},
    {
        initialRouteName:'Favorites',
        defaultNavigationOptions:{
            headerTitle:'Your Favorites'
        },
        
    }

)
// A **screen** component can have a static property called **navigationOptions** which is either an object or a function that returns an object that contains various configuration options
// **tabBarIcon** is a property on navigationOptions, so we know we can use it on our screen components or in createBottomTabNavigator configuration 
// in order to centralize the icons
const LaunchFavTabNavigator = createBottomTabNavigator({
    Favorites: {screen :FavNavigator, navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <AntDesign name="star" size={26} color="black"/>
    }}},
    Launches: {screen: navigator,navigationOptions:{
        tabBarIcon:(tabInfo)=>{
        return <FontAwesome5 name="rocket" size={26} color="black" />
    }}}
    
});
// **createAppContainer** is a function that returns a React component to take as a parameter the React component created by
// the createStackNavigator, and can be directly exported from App.js to be used as our App's root component.
const App= createAppContainer(LaunchFavTabNavigator);



// App.js is the entry point (or root component) for app -> it is the component from which every other component descends
// we pass App as child to LaunchProvider
// LaunchProvider wrapping the app navigation
export default()=>{
    return (
        <LaunchProvider >
              <App/>
        </LaunchProvider>
      ) ;
}