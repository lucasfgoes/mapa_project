import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Card() {
  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <View style={style.metaContainer}>
          <View>
            <Text style={style.timings_bug}>Today @ 9PM</Text>
            <Text style={style.description}>Let's talk about avatar!</Text>
          </View>
          <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Remind me</Text>
          </TouchableOpacity>
        </View>
        <Image source={{
          uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
        }} style={style.avatar} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#0891b2',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'center',
    width: 375,
    maxWidth: '100%'
  },
  timings_bug: {
    color: '#fff',
    fontSize: 14
  },
  metaContainer: {
    justifyContent: 'space-between'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  description: {
    color: 'white',
    marginTop: 5,
    fontSize: 20
  },
  button: {
    backgroundColor: '#22d3ee',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 2
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14
  }
});