import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';

const db = require('../data/db.json');

export default function TaskListScreen({ navigation }) {
  const [contactos, setContactos] = useState(db);

 
  const addContacto = (contacto) => {
    setContactos(prev => [...prev, contacto]);
  };

 
  const toggleFavorite = (contactoId) => {
    setContactos(prev =>
      prev.map(contacto =>
        contacto.id === contactoId ? { ...contacto, favorite: !contacto.favorite } : contacto
      )
    );
  };

  
  const displayedContactos = contactos;

  return (
    <View style={styles.container}>
      <Text>Contactos</Text>
      <ScrollView style={styles.list}>
        {displayedContactos.map(contacto => (
          <View key={contacto.id} style={styles.taskRow}>
            <Text style={styles.icon}>
              {contacto.favorite ? 'Favorito ★' : 'Quitar Favorito ☆'}
            </Text>
            <Text style={styles.taskText}>
              {contacto.Nombre} - {contacto.Numero}
            </Text>
            <Button
              title={contacto.favorite ? 'Quitar De Favorito' : 'Favorito'}
              onPress={() => toggleFavorite(contacto.id)}
              color={contacto.favorite ? '#FFD700' : '#888'}
            />
          </View>
        ))}
      </ScrollView>
      <Button
        title="Crear Nuevo contacto"
        onPress={() => navigation.navigate('AgregarContacto', { addTask: addContacto })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, padding: 16, backgroundColor: '#fff' },
  list:         { flex: 1, marginBottom: 12 },
  taskRow:      { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  icon:         { fontSize: 18, marginRight: 8 },
  taskText:     { fontSize: 16 },
});
