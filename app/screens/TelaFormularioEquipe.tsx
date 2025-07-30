import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../routes/stack'
import { postEquipe } from '../services/equipesService';

type Props = NativeStackScreenProps<RootStackParamList, 'TeamForm'>;

export default function TelaFormularioEquipe({ route, navigation }: Props) {
  const { sport } = route.params;
  const [nome, setNome] = useState('');

  const salvar = async () => {
    await postEquipe({ nome: `${sport} - ${nome}` });
    Alert.alert('Equipe cadastrada!');
    setNome('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Equipe de {sport}</Text>
      <TextInput placeholder="Nome da equipe" value={nome} onChangeText={setNome} style={{ borderWidth: 1, marginVertical: 10 }} />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}