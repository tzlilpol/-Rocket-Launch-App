import React,{useContext} from 'react';
import { View,StyleSheet } from 'react-native';
import LaunchesList from '../components/LaunchesList';
import LaunchContext from '../context/LaunchContext'
function FavoriteScreen(props) {

    const {data,addLaunch} =useContext(LaunchContext);
    return (
        <View style={styles.container}>
            <LaunchesList 
            results={data}
            navigation={props.navigation}
            ></LaunchesList>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default FavoriteScreen;