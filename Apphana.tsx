import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet } from 'react-native';
import programmersImage from './assets/programmers.jpeg';

const AboutMeComponent = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={programmersImage}
        style={{width: 200, height: 200}}
      />
      <Text style={styles.name}>Welcome</Text>
      <Text style={styles.bio}>Basic Components in React Native</Text>
      <TextInput
        placeholder="Say something to me..."
        style={styles.textInput}
      />
      <View style={styles.footer}>
        <Text>Contact: hana.rantelinggi@gmail.com</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#a87d32',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  name: {
    fontFamily: 'Times New Roman',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bio: {
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 10,
  },
  footer: {
    marginTop: 20,
  },
});

export default AboutMeComponent;
