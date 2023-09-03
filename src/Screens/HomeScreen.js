import * as React from 'react';
import { Button, View, Text,FlatList } from 'react-native';
import ScreenName from '../Nav/ScreenNames';
import peopleData from '../Data/Data';
import WhatsCard from '../componnt/WhatsCard';


const HomeScreen=(props)=> {

  // console.log(props);

  return (
    <View style={{ flex: 1,}}>
      <Button title='mosa' onPress={()=>props.navigation.navigate(ScreenName.ChatScreen)}/>
      <FlatList
        data={peopleData}
        renderItem={({item}) => 
        <WhatsCard image={item.image()} name={item.name} />}
      />
    </View>
  );
}


export default HomeScreen