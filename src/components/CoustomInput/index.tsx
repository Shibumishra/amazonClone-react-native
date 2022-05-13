import React from 'react'
import { TextInput, View } from 'react-native'
import styles from './styles';

interface Props {
    value: string;
    setValue: (value: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
}

const CoustomInput = ({ value, setValue, placeholder, secureTextEntry }: Props) => {

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={styles.input}
            />
        </View>
    )
}

export default CoustomInput;