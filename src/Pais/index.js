import React from 'react';
import { TextInput,StyleSheet,Picker,ListView, TouchableOpacity, FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Pais extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://api.salud.gob.sv/pais.json')
      .then((response) => response.json())
      .then((responseJson) => {
        
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View >
        
        <Picker  
          selectedValue={this.state.mode}
          onValueChange={(modeValue, modeIndex) => this.setState({mode: modeValue})}>
          {this.state.dataSource.map((item,key)=>(
          <Picker.Item label={item.nombre} value={item.id} key={key} />)
            )}  
        </Picker>
        

      </View>
    );
  }
}







});