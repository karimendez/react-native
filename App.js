import React from 'react';
import { Switch,ScrollView,TextInput,StyleSheet,Picker, ActivityIndicator, Text, View  } from 'react-native';

import AreaGeografica from './src/AreaGeografica/';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://api.salud.gob.sv/local_partos.json')
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
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.picker}>Establecimiento: </Text>
        <Picker style={styles.picker} ></Picker>
        <AreaGeografica/>
        <Text style={styles.picker}>Fosalud</Text>
        <Switch/>
        <Text style={styles.picker}>Local Parto</Text>
        <Picker style={styles.picker} 
          selectedValue={this.state.mode}
          onValueChange={(modeValue, modeIndex) => this.setState({mode: modeValue})}>
          {this.state.dataSource.map((item,key)=>(
          <Picker.Item label={item.nombre} value={item.id} key={key} />)
            )}  
        </Picker>
        <Text style={styles.picker}>Comunitario asistido por</Text>
        <Picker style={styles.picker} ></Picker>
        <Text style={styles.text3}>Expediente de la madre</Text>
        <Text style={styles.text4}>Plantar</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text4}>Exclusivo</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text4}>ISSS>Formulario</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text2}>Expediente RN</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text2}>Nombres</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text2}>Apellidos</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text2}>Sexo</Text>
        <Switch />
        <Text style={styles.text2}>Nacimiento</Text>
        <Text style={styles.text4}>Digitar la Fecha de Nacimiento hasta
        estar completamente seguro de la informacion, ya que el Codigo Unico
        sera generado a partir de este campo, por lo tanto,
        una vez registrado el nacimiento no sera posible modificar esa fecha,
        ni tampoco eliminarlo</Text>
        <Text style={styles.text4}>Fecha</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text4}>Hora</Text>
        <Picker style={styles.textb} ></Picker>
        <Text style={styles.text4}>hrs</Text>
        <Picker style={styles.textb} ></Picker>
        <Text style={styles.text4}>min</Text>
        <Text style={styles.text2}>Peso (gr)</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text4}>Longitud (cm)</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text4}>Per. Cef (cm)</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text4}>Amenorrea (semanas)</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text2}>Via de Evacuacion</Text>
        <Picker style={styles.textb} ></Picker>
        <Text style={styles.text4}>Clase de Parto</Text>
        <Picker style={styles.textb} ></Picker>
        <Text style={styles.text5}>Aplicacion de Vacuna:</Text>
        <Text style={styles.text2}>BCG</Text>
        <Switch/>
        <Text style={styles.text3}>Fecha</Text>
        <TextInput style={styles.textb}/>        
        <Text style={styles.text2}>No se vacuno debido a</Text>
        <Text style={styles.text4}>Bajo Peso</Text>
        <Switch/>
        <Text style={styles.text4}>Morbilidad</Text>
        <Switch/>
        <Text style={styles.text4}>Expuesto Perinatalmente</Text>
        <Switch/>
        <Text style={styles.text4}>Desabastecimiento</Text>
        <Switch/>
        <Text style={styles.text4}>Fallecio</Text>
        <Switch/>
        <Text style={styles.text2}>Hepatitis B</Text>
        <Switch/>
        <Text style={styles.text4}>Fecha</Text>
        <TextInput style={styles.textb}/> 
        <Text style={styles.text2}>No se vacuno debido a</Text>
        <Text style={styles.text4}>Morbilidad</Text>
        <Switch/>
        <Text style={styles.text4}>Desabastecimiento</Text>
        <Switch/>
        <Text style={styles.text4}>Fallecio</Text>
        <Switch/>
        <Text style={styles.text2}>Retorno</Text>
        <Picker style={styles.textb} ></Picker>
        <Text style={styles.text5}>Informacion de la Madre:</Text>
        <Text style={styles.text3}>Nombres</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text3}>Apellidos</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text3}>Edad (años)</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text3}>Direccion</Text>
        <TextInput multiline = {true} numberOfLines = {4} style={styles.textA}/>
        <Text style={styles.text3}>Depto/Municipio</Text>
        <Picker style={styles.textb} ></Picker>
        <Picker style={styles.textb} ></Picker>
        <Text style={styles.text3}>Canton</Text>
        <Picker style={styles.textb} ></Picker>
        <Text style={styles.text4}>Area</Text>
        <Switch/>
        <Text style={styles.text3}>Aplicacion Vacuna Tdpa</Text>
        <Switch/>
        <Text style={styles.text4}>Fecha</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text4}>Aplicacion Vacuna Influenza</Text>
        <Switch/>
        <Text style={styles.text4}>Fecha</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text3}>Tipo Documento</Text>
        <Picker style={styles.textb} ></Picker>
        <Text style={styles.text4}>Numero (sin guiones)</Text>
        </ScrollView>
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