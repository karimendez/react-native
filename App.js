import React from 'react';
import { Switch,ScrollView,TextInput,StyleSheet,Picker, ActivityIndicator, Text, View,Button,Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';
import ToggleSwitch from 'toggle-switch-react-native';


import AreaGeografica from './src/AreaGeografica/';
import Departamento from './src/Departamento/';
import Establecimiento from './src/Establecimiento/';
import LocalParto from './src/LocalParto/';
import Municipio from './src/Municipio/';
import Pais from './src/Pais/';
import Sexo from './src/Sexo';
import TipoDocumento from './src/TipoDocumento';
import TipoParto from './src/TipoParto';


export default class FetchExample extends React.Component {

	_onPress() {
  Alert.alert('Consumiendo API!');
 }

  constructor(props){
    super(props);
    this.state ={ isLoading: true, datetime: ''}
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
        <Establecimiento/>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Fosalud'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <Text style={styles.picker}>Local Parto</Text>
        <LocalParto/>
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
        <Sexo/>
        <Text style={styles.text2}>Nacimiento</Text>
        <Text style={styles.text4}>Digitar la Fecha de Nacimiento hasta
        estar completamente seguro de la informacion, ya que el Codigo Unico
        sera generado a partir de este campo, por lo tanto,
        una vez registrado el nacimiento no sera posible modificar esa fecha,
        ni tampoco eliminarlo</Text>
        <Text style={styles.textb}>fecha: {this.state.datetime}</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.datetime}
          mode="datetime"
          format="YYYY-MM-DD HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          minuteInterval={10}
          onDateChange={(datetime) => {this.setState({datetime: datetime});}}
        />
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
        <TipoParto/>
        <Text style={styles.text5}>Aplicacion de Vacuna:</Text>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='BCG'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <Text style={styles.text3}>Fecha</Text>
        <TextInput style={styles.textb}/>        
        <Text style={styles.text2}>No se vacuno debido a</Text>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Bajo Peso'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Morbilidad'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Expuesto Perinatalmente'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Desabastecimiento'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Fallecio'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Hepatitis B'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <Text style={styles.text4}>Fecha</Text>
        <TextInput style={styles.textb}/> 
        <Text style={styles.text2}>No se vacuno debido a</Text>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Morbilidad'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Desabastecimiento'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Fallecio'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
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
        <Departamento/>
        <Municipio/>
        <Text style={styles.text3}>Canton</Text>
        <Picker style={styles.textb} ></Picker>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Area'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Aplicacion Vacuna Tdpa'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <Text style={styles.text4}>Fecha</Text>
        <TextInput style={styles.textb}/>
        <ToggleSwitch style={styles.switch}
		    isOn={false}
		    onColor='green'
		    offColor='red'
		    label='Aplicacion Vacuna Influenza'
		    labelStyle={{color: '#87ceeb', fontWeight: '900'}}
		    size='large'
		    onToggle={ (isOn) => console.log('changed to : ', isOn) }
		/>
        <Text style={styles.text4}>Fecha</Text>
        <TextInput style={styles.textb}/>
        <Text style={styles.text3}>Tipo Documento</Text>
        <TipoDocumento/>
        <Text style={styles.text4}>Numero (sin guiones)</Text>
        <TextInput style={styles.textb}/>        
        <Button  onPress={this._onPress} title="Grabar" color="#000000" accessibilityLabel="Tap on Me"/>
        
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
    },
    switch : {
    	backgroundColor : '#ffffff'
    }

});