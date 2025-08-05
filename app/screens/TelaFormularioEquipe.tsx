// app/screens/TeamFormScreen.tsx
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../routes/stack';
import { postEquipe } from '../services/equipesService';

type Props = NativeStackScreenProps<RootStackParamList, 'TeamForm'>;

export default function TeamFormScreen({ route, navigation}: Props) {
  const { sport } = route.params;
  const [nome, setNome] = useState('');

  const salvar = async () => {
    if (!nome.trim()) {
      Alert.alert('Informe o nome da equipe.');
      return;
    }
    try {
      await postEquipe({ nome: `${sport} - ${nome}` });
      Alert.alert('Equipe cadastrada!');
      setNome('');
    } catch {
      Alert.alert('Erro ao cadastrar equipe');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/team.png')} style={styles.icon} />
      <Text style={styles.label}>Equipe de {sport}</Text>
      <TextInput
        placeholder="Nome da equipe"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <Button title="Salvar" onPress={salvar} />
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
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
});
