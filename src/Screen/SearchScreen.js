import React, { useState,useEffect} from 'react';
import { View,Text,StyleSheet, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import LaunchesList from '../components/LaunchesList';
import useResults from '../hooks/useResults'
import {withNavigationFocus } from 'react-navigation';


// The navigation prop is passed in to every screen component (definition) in stack navigator
function SearchScreen({navigation}) {
    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] =useResults();

    return (
            <View style={styles.container}>
               
                <SearchBar 
                 term={term}
                  onChangeTerm={newTerm=>setTerm(newTerm)}
                  onTermSubmit={()=>{searchApi(term)}}
                  />
                <Text>{errorMessage}</Text>
                <LaunchesList
                    
                    navigation={navigation}
                   results={results}/>
            </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default withNavigationFocus(SearchScreen);
