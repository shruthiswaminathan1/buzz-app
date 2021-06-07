import * as React from 'react';
import {View, Text} from 'react-native';

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color:'purple', fontSize: 25}}>Instagram</Text>
            </View>
        )
    }
}