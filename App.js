import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Card />
      </View>
      <View>
        <MapView
          style={{ height: 200, width: 375 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        ></MapView>
      </View>
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
