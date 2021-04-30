import React, { useState } from 'react';


// Context is designed to share data that can be considered “global” for a tree of React components
// When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
const LaunchContext =React.createContext();

export const LaunchProvider =({children})=>{
    const [launches,setLaunches] =useState([]);

    const addLuanch=(launch)=>{
        launch.fav=true
        setLaunches([...launches,launch])
    }
    const removeLuanch = (id) => {
        setLaunches(launches.filter(item => item.id !== id))
    }
    const findLaunch =(id) =>{
        const found=launches.find(item => item.id === id)
        
        if (found===undefined){
            return false
    }
        else {
            return true
        }
            
    }
    // All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
    // The children is actually App component
    return <LaunchContext.Provider
                value={{data:launches,addLuanch,removeLuanch,findLaunch}}
                >{children}</LaunchContext.Provider>
}

export default LaunchContext;