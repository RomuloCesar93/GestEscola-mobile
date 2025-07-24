import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CadastroEquipeScreen() {
  const [nome, setNome] = useState('');
  const [modalidade, setModalidade] = useState<'FUTSAL' | 'VÔLEI' | 'BASQUETE'>('FUTSAL');

  const salvar = async () => {
    try {
      const response = await fetch('http://localhost:5000/equipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, modalidade })
      });
      const data = await response.json();
      if (response.ok) Alert.alert('Sucesso', 'Equipe cadastrada!');
      else Alert.alert('Erro', data.erro || 'Falha ao cadastrar');
    } catch (e) {
      Alert.alert('Erro', 'Falha na conexão com servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRAR EQUIPE</Text>
      <TextInput
        placeholder="Nome da equipe"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      {['FUTSAL', 'VÔLEI', 'BASQUETE'].map((m) => (
        <TouchableOpacity key={m} onPress={() => setModalidade(m as any)} style={styles.radioOption}>
          <View style={styles.radioCircle}>
            {modalidade === m && <View style={styles.radioSelected} />}
          </View>
          <Text>{m}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 100 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10,
    borderRadius: 5, marginVertical: 10
  },
  radioOption: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  radioCircle: {
    height: 20, width: 20, borderRadius: 10, borderWidth: 2,
    borderColor: '#000', justifyContent: 'center', alignItems: 'center',
    marginRight: 5
  },
  radioSelected: { width: 10, height: 10, backgroundColor: '#000', borderRadius: 5 },
  button: {
    backgroundColor: '#000', padding: 12, borderRadius: 6, marginTop: 20,
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
