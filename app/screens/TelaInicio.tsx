import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../routes/stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/menu.png')} style={styles.icon} />
      <Button title="Cadastrar Equipes" onPress={() => navigation.navigate('TeamSelection')} />
      <Button title="Nova Partida" onPress={() => navigation.navigate('NewMatch')} />
      <Button title="Ver Equipes por Modalidade" onPress={() => navigation.navigate('EquipesModalidade')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 20,
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});
