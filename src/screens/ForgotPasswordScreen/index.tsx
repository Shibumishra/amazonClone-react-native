import React, { useState } from 'react';
import { View, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CoustomInput from '../../components/CoustomInput';
import styles from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Auth } from '../../services';

const ForgotPasswordScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    return (
        <View style={styles.root}>
            <CoustomInput
                placeholderTextColor={isDarkMode ? Colors.white : Colors.black}
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />
            <Button
                text="Forget Password"
                onPress={() => Auth.forgetPassword(email)}
                containerStyles={{ backgroundColor: '#f3d078', width: '100%', }}
            />
        </View>
    )
}

export default ForgotPasswordScreen;