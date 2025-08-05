import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

type RootStackParamList = {
  CadastroEquipes: undefined;
  TeamForm: { sport: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'CadastroEquipes'>;

export default function TelaCadastroEquipes({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a modalidade:</Text>

      <Image source={require('../../assets/images/futsal.png')} style={styles.icon} />
      <Button
        title="Futsal"
        onPress={() => navigation.navigate('TeamForm', { sport: 'Futsal' })}
      />

      <Image source={require('../../assets/images/volei.png')} style={styles.icon} />
      <Button
        title="Vôlei"
        onPress={() => navigation.navigate('TeamForm', { sport: 'Vôlei' })}
      />

      <Image source={require('../../assets/images/basquete.png')} style={styles.icon} />
      <Button
        title="Basquete"
        onPress={() => navigation.navigate('TeamForm', { sport: 'Basquete' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 16 },
  icon: { width: 100, height: 100, margin: 10 },
});
