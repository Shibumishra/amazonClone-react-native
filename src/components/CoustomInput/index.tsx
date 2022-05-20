import React from 'react'
import { TextInput, View, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './styles';

interface Props {
    value: string;
    setValue: (value: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
    placeholderTextColor?: string;
}

const CoustomInput = ({ value, setValue, placeholder, secureTextEntry, placeholderTextColor }: Props) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={[styles.input, { color: isDarkMode ? Colors.white : Colors.black }]}
                placeholderTextColor={placeholderTextColor}
            />
        </View>
    )
}

export default CoustomInput;