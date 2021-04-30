import React, { useState } from 'react';
import { Text,View,StyleSheet,FlatList,ScrollView } from 'react-native';
import LaunchDetail from './LaunchDetail';

function LaunchesList({results,navigation}) {

    return (
        <View>
            <FlatList
             showsVerticalScrollIndicator={true}
             data={results}
             keyExtractor={item=>item.id}
             renderItem={({item})=>{
                 return <LaunchDetail
                 navigation={navigation}
                 launch={item} />
             }}>
            </FlatList>
        </View>
    );
}
const styles = StyleSheet.create({

})
export default LaunchesList;