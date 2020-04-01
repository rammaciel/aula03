import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, renderItem} from 'react-native';


export default function App() {
  const[nome, setNome] = useState('');
  const[nomes, setNomes] = useState([]);
  const[telefone, setTelefone] = useState('');
  const[telefones, setTelefones] = useState([]);
  //novo item para o estado do componente
  const [contadorNomes, setContadorNomes] = useState(0);
  const [contadorTelefones, setContadorTelefones] = useState(0);
  

  const capturarNome = (nome) => {
    setNome(nome)
  };
  const capturarTelefone = (telefone) => {
    setTelefone(telefone)
  };

  const botao = () => {
    adicionarNome()
    adicionarTelefone()
  }
  const adicionarNome = () => {
    setNomes ((nomes) =>{
      console.log (nomes);
      //console.log (lembrete);
      setContadorNomes (contadorNomes + 1);
      return [...nomes, {key: contadorNomes.toString(), value: nome}];
    });
  }
  const adicionarTelefone = () => {
    setTelefones ((telefones) =>{
      console.log (telefones);
      //console.log (lembrete);
      setContadorTelefones (contadorTelefones + 1);
      return [...telefones, {key: contadorTelefones.toString(), value:telefone}];
    });
  }

  return (
  <View style={styles.telaPrincipalView}>
    
    <View style={styles.lembreteView}>
        {/*O usuario ira inserir os lembretes aqui*/}
        <TextInput placeholder="Nome" style={styles.nomeInputText}
          //quando texto for mudado, chamara a funcao capturar lembre e sera guarado na variavel lembrete
          onChangeText={capturarNome}
          value={nome}
        />
        <TextInput placeholder="Telefone" style={styles.telefoneInputText}
          //quando texto for mudado, chamara a funcao capturar lembre e sera guarado na variavel lembrete
          onChangeText={capturarTelefone}
          value={telefone}
        />
        
        {/* <Button title="Nome"
          onPress={adicionarNome}
        />
        <Button title="Telefone"
          onPress={adicionarTelefone}
        /> */}
        <Button title="Ambos"
          onPress={botao}
        
        />
      </View>
      <FlatList
        data={nomes}/*coleção de lembretes*/
        renderItem={ /*mapeamento*/
          nome => ( /*dado um lembrete, gera uma view*/
            <View style={styles.itemNaLista}>
            <Text>{nome.item.value}</Text>
            </View>
          )
        }
      />
      <FlatList
        data={telefones}/*coleção de lembretes*/
        renderItem={ /*mapeamento*/
          telefone => ( /*dado um lembrete, gera uma view*/
            <View style={styles.itemNaLista}>
            <Text>{telefone.item.value}</Text>
            </View>
          )
        }
      />
  </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding:50
  },
  lembreteView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  nomeInputText:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding:2,
    marginBottom: 8,
    
  },
  telefoneInputText:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding:2,
    marginBottom: 8,
    
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#ddd',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});