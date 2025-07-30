import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
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
    <View style={{ padding: 20 }}>
      <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Equipes cadastradas:</Text>
      <FlatList
        data={equipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={{ marginVertical: 5 }}>{item.nome}</Text>}
      />
    </View>
  );
}
