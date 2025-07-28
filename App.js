import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import dbData from './data/db.json';

export default function App() {
  const personajes = dbData.personajes;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Directorio de Personajes de JUEGOS</Text>
      <Text style={styles.subtitle}>Total: {personajes.length} personajes</Text>
      <ScrollView style={styles.scrollView}>
        {personajes.map(personaje => (
          <View key={personaje.id} style={styles.personajeCard}>
            <Text style={styles.personajeNombre}>{personaje.nombre}</Text>
            <Text style={styles.personajeTelefono}>{personaje.telefono}</Text>
            <Text style={styles.favoritoStatus}>
              {personaje.favorito ? 'Favorito' : 'No favorito'}
            </Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  scrollView: {
    flex: 1,
  },
  personajeCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  personajeNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  personajeTelefono: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 5,
  },
  favoritoStatus: {
    fontSize: 12,
    color: '#FF9500',
    fontWeight: '500',
  },
});