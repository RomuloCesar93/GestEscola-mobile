import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function TelaLogin({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao GestEscola</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}