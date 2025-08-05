// app/screens/NewMatchScreen.tsx
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { postPartida } from '../services/partidasService';

export default function NewMatchScreen() {
  const [local, setLocal] = useState('');
  const [horario, setHorario] = useState('');

  const salvar = async () => {
    if (!local.trim() || !horario.trim()) {
      Alert.alert('Preencha todos os campos.');
      return;
    }
    try {
      await postPartida({ local, horario });
      Alert.alert('Partida cadastrada!');
      setLocal('');
      setHorario('');
    } catch {
      Alert.alert('Erro ao cadastrar partida');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/cadastro.png')} style={styles.icon} />
      <Text style={styles.title}>Nova Partida</Text>
      <TextInput
        placeholder="Local"
        value={local}
        onChangeText={setLocal}
        style={styles.input}
      />
      <TextInput
        placeholder="Horário"
        value={horario}
        onChangeText={setHorario}
        style={styles.input}
      />
      <Button title="Salvar Partida" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
