import React from 'react';
import { ScrollView,Picker,StyleSheet,FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class Municipios extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://api.salud.gob.sv/municipios.json')
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
      <ScrollView>
        
        <Picker style={styles.picker} 
          selectedValue={this.state.mode}
          onValueChange={(modeValue, modeIndex) => this.setState({mode: modeValue})}>
          {this.state.dataSource.map((item,key)=>(
          <Picker.Item label={item.nombre} value={item.id} key={key} />)
            )}  
        </Picker>
        

      </ScrollView>
      </View>
    );
  }
}

const styles =StyleSheet.create({
       picker : {
      backgroundColor : '#ffffff',
      color: '#000000'
      }






});