import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../routes/stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function TelaLogin({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao GestEscola</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});