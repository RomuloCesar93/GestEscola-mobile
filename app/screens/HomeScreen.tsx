import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEJA BEM-VINDO</Text>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('CadastroEquipe')}>
        <Text style={styles.optionText}>CADASTRO DE EQUIPES</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 100 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 },
  option: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center'
  },
  optionText: { color: '#fff', fontWeight: 'bold' }
});
