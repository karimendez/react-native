import React from 'react';
import { Picker,StyleSheet,FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class TipoDocumentos extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://api.salud.gob.sv/tipo_documentos.json')
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
      <View>
        
        <Picker  style={styles.picker} 
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


const styles =StyleSheet.create({
       picker : {
      backgroundColor : '#ffffff',
      color: '#000000'
      }




});