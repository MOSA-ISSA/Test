import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = ({route}) => {
    console.log('====================================');
    console.log(route.params);
    console.log('====================================');
    const name=props.route.params.name
return (
        <View style={{ flex: 1, alignItems: 'center',}}>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
}

export default DetailsScreen

const styles = StyleSheet.create({
    text:{
        fontSize: 25,
    }
})