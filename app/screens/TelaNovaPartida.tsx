import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { postPartida } from '../services/partidasService';

export default function TelaNovaPartida() {
  const [local, setLocal] = useState('');
  const [horario, setHorario] = useState('');

  const salvar = async () => {
    await postPartida({ local, horario });
    Alert.alert('Partida cadastrada!');
    setLocal('');
    setHorario('');
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Local" value={local} onChangeText={setLocal} style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Horário" value={horario} onChangeText={setHorario} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Salvar Partida" onPress={salvar} />
    </View>
  );
}