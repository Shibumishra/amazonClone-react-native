import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface ButtonProps {
    text: string;
    onPress: () => void;    
    containerStyles?: object;
}

const Button = ({ text,  onPress, containerStyles}: ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root: {
        marginVertical: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 0,
        borderColor: '#a15e1b',
    },
    text: {
        fontSize: 16,
        color: '#111',
        fontWeight: 'bold',
    },
})

export default Button;