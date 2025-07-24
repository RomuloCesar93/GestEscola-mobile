import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState<'admin' | 'responsavel'>('admin');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GESTSCHOOL</Text>

      <Text style={styles.label}>ENTRAR COMO:</Text>
      <View style={styles.radioContainer}>
        {['admin', 'responsavel'].map((t) => (
          <TouchableOpacity key={t} onPress={() => setTipo(t as any)} style={styles.radioOption}>
            <View style={styles.radioCircle}>
              {tipo === t && <View style={styles.radioSelected} />}
            </View>
            <Text>{t.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 100 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 16 },
  radioContainer: { flexDirection: 'row', marginBottom: 10 },
  radioOption: { flexDirection: 'row', alignItems: 'center', marginRight: 10 },
  radioCircle: {
    height: 20, width: 20, borderRadius: 10, borderWidth: 2, borderColor: '#000',
    justifyContent: 'center', alignItems: 'center', marginRight: 5
  },
  radioSelected: { width: 10, height: 10, backgroundColor: '#000', borderRadius: 5 },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5,
    marginVertical: 5
  },
  button: {
    backgroundColor: '#000', padding: 12, borderRadius: 5, marginTop: 15
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' }
});
