import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({placeholder}) => {
    return (
        <TextInput placeholder={placeholder} style={styles.input} />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 20,
    }
})

export default Input;