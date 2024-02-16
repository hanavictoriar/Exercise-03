import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet } from 'react-native';
import hanaImage from './assets/arturr.jpg';
const MyCV = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
       <Image source={hanaImage} style={styles.profileImage} />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.jobTitle}>Web Developer</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text>Email: john.doe@example.com</Text>
        <Text>Phone: (123) 456-7890</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sekolah</Text>
        <Text>SMA Kr.Eben Haezar</Text>
        <Text>Tahun lulus: 2021</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text>Public speaking, html, css</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text>----</Text>
        <Text>----</Text>
      </View>
      <TextInput placeholder="Additional notes..." style={styles.textInput} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  jobTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default MyCV;
