import launchlibrary from '../api/launchlibrary';
import React, { useState,useEffect } from 'react';

export default ()=>{
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage]=useState('');

    const searchApi= async (searchTerm) =>{
        try{
            const response = await launchlibrary.get('/',{
            params: {
                format:'json',
                search:searchTerm,
                ordering:'net'
                }
            });

            setResults(response.data.results)
            setErrorMessage('')
        }
        catch(error){
            console.log(error)
            setErrorMessage('Something went wrong')
        }

    };

    async function loadHistoryLounchesApi () {
        try{
            let promiseArray=[]
            for (let i=0; i < 6; i++) {
                promiseArray.push(launchlibrary.get('/',{
                    params: {
                        format:'json',
                        ordering:'net',
                        offset: (i*10)

                        }
                    }))
            }
            let info_response=await Promise.all(promiseArray);
            let launchHistory=[]
            info_response.forEach((item)=>{
                launchHistory.push(...item.data.results)}
                )
            setResults(launchHistory)

        }
        catch(error){
            console.log(error)
            setErrorMessage('Something went wrong')
        }

    };
    useEffect(()=>{
        loadHistoryLounchesApi()
    },[]);// Empty array as dependency, useEffect is invoked once

    return [searchApi,results,errorMessage]
};