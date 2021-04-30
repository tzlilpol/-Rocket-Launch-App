import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View,StyleSheet,Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function SearchBar({term,onChangeTerm,onTermSubmit}) {
    return (
        <View style={styles.backgroundStyle}> 
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search..."
                style={styles.inputStyle}
                value={term}
                onChangeText={onChangeTerm}
                onEndEditing={onTermSubmit}
             ></TextInput>
            <Feather name="search" style={styles.iconStyle} color="black" />
        </View>
    );
}
const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle:{
        flex:1,
        fontSize:18,
      
    },
    iconStyle:{
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal:15
    }

})
export default SearchBar;

