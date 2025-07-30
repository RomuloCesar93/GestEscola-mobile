import React from 'react';
import { View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function TelaInicio({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 20, padding: 20 }}>
      <Button title="Cadastrar Equipes" onPress={() => navigation.navigate('TeamSelection')} />
      <Button title="Nova Partida" onPress={() => navigation.navigate('NewMatch')} />
      <Button title="Ver Equipes por Modalidade" onPress={() => navigation.navigate('EquipesModalidade')} />
    </View>
  );
}