import React from 'react';
import { View, Button, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/stack';

type Props = NativeStackScreenProps<RootStackParamList, 'TeamSelection'>;

export default function TelaCadastroEquipes({ navigation }: Props) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Escolha a modalidade:</Text>
      <Button title="Futsal" onPress={() => navigation.navigate('TeamForm', { sport: 'Futsal' })} />
      <Button title="Vôlei" onPress={() => navigation.navigate('TeamForm', { sport: 'Vôlei' })} />
      <Button title="Basquete" onPress={() => navigation.navigate('TeamForm', { sport: 'Basquete' })} />
    </View>
  );
}