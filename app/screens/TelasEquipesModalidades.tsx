import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { getEquipes } from '../services/equipesService';

interface Equipe {
  id: number;
  nome: string;
}

export default function EquipePorModalidadeScreen() {
  const [equipes, setEquipes] = useState<Equipe[]>([]);

  useEffect(() => {
    getEquipes().then(setEquipes).catch(() => {
      console.error('Erro ao carregar equipes');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/list.png')} style={styles.icon} />
      <Text style={styles.title}>Equipes cadastradas:</Text>
      <FlatList
        data={equipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.nome}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  item: {
    marginVertical: 5,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },
});

