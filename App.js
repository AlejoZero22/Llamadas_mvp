import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Directorio para tus personajes de JUEGOS</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

return (
  <view style={styles.container}>
    <text style={styles.title}>{appTitle}</text>
    <tex style={styles.title}>Zero - 0204082480</tex>
    <tex style={styles.title}>Link - 6589478526</tex>
    <tex style={styles.title}>Don Celular muerta - 6453597850</tex>
    <tex style={styles.title}>Mega X - 2648975605 </tex>
    <tex style={styles.title}>Mario - 3689745821</tex>


  </view>
);