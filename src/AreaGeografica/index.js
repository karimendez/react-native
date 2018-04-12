import React from 'react';
import { Picker,StyleSheet,FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://api.salud.gob.sv/area_geograficas.json')
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
        <Picker style={styles.picker} 
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
    container : {
      backgroundColor : '#003063',
    },
    picker : {
      backgroundColor : '#cccc99',
      color: '#000000'
    },
    text : {
      color: '#ffffff',
      fontWeight: 'bold'
    },
    textInput : {

    },
    text2 : {
      backgroundColor : '#ffcc66',
      color: '#000000'
    },
    text3 : {
      backgroundColor : '#CC9999',
      color: '#000000'
    },
    text4 : {
      backgroundColor : '#cccccc',
      color :'#000000'
    },
    textb : {
      backgroundColor : '#ffffff',
      color :'#000000'
    },
    text5 : {
      backgroundColor : '#003063',
      color :'#ffffff'
    },
    textA : {
      height : 80,
      borderColor: '#cccccc',
      borderWidth: 1,
      color: '#000000',
      backgroundColor: '#ffffff'
    },
    button : {


    }

});