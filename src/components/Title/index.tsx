import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <View>
            <Text style={styles.title}>WELCOME!!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center', 
        backgroundColor: 'red',
    }
});

export default Title;