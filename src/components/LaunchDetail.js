import React from 'react';
import { Text, View ,StyleSheet, Image, Touchable,TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import FavoriteButton from './FavoriteButton';

// props.navigation.navigate('WebView') pushes a new route to the stack navigator if it's not already in the stack, otherwise it jumps to that screen.
// Pass params to a route by putting them in an object as a second parameter this.props.navigation.navigate('RouteName', { /* params go here */ })
function LaunchDetail({props,launch,navigation}) { 
    
    return (

                <Card >
                    <Card.Title title={launch.name} subtitle= {launch.pad.location.country_code} style={{flex: 1}} left={()=>{return(
                        <FavoriteButton {...props} launch={launch} >  </FavoriteButton>)}}/>
                        <TouchableOpacity onPress={()=>{navigation.navigate({
                    routeName:'WebView',
                    params:{
                        launch:launch
                    }})}}>
                    <Card.Cover source={{uri:launch.image}} />
                    </TouchableOpacity>
                    <Card.Content>
                    <Paragraph>Date :{launch.net}</Paragraph>
                    <Paragraph>Status :{launch.status.name}</Paragraph>
                    </Card.Content>
                </Card>
    );
}
const styles = StyleSheet.create({

})
export default LaunchDetail;