import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert
} from 'react-native';

export default function AddTaskScreen({ navigation, route }) {
  const [Nombre, setNombre] = useState('');
  const [Numero, setNumero] = useState('');

  const { addTask } = route.params || {};

  const isValid = Nombre.trim().length >= 3;

  const handleAdd = () => {
    if (!isValid) {
      Alert.alert('Error', 'El contacto debe tener al menos 3 caracteres.');
      return;
    }
    const newContacto = {
      id: Date.now(),
      Nombre: Nombre.trim(),
      Numero: Numero.trim(),
      favorite: false,
    };

    if (typeof addTask === 'function') {
      addTask(newContacto);
    } else {
      console.warn('addTask no está definido');
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crear Nuevo Contacto</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre Nuevo Contacto (Debe tener un Nombre)"
        value={Nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Teléfono"
        value={Numero}
        onChangeText={setNumero}
        keyboardType="phone-pad"
      />

      { !isValid && Nombre.length > 0 && (
        <Text style={styles.errorText}>
          El Contacto debe tener Nombre.
        </Text>
      )}

      <View style={styles.buttons}>
        <Button
          title="Crear Contacto"
          onPress={handleAdd}
          disabled={!isValid}
        />
        { Nombre.length > 0 && (
          <Button
            title="Limpiar"
            onPress={() => {
              setNombre('');
              setNumero('');
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  { flex: 1, padding: 16, backgroundColor: '#fff' },
  header:     { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  input:      {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  errorText:  { color: 'red', marginBottom: 8 },
  buttons:    { flexDirection: 'row', justifyContent: 'space-between' },
});

