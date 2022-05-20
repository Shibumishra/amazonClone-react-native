import React, { useState } from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CoustomInput from '../../components/CoustomInput';
import styles from './styles';
import Button from '../../components/Button';
import { Auth } from '../../services';

const Signup = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');


    const onTermsOfCondition = () => {
        console.warn('onTerms Of Condition')
    }
    const onPrivacyPolicy = () => {
        console.warn('on Privacy Policy')
    }
    

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <CoustomInput
                placeholderTextColor={ isDarkMode ? Colors.white : Colors.black}
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />
            <CoustomInput
                placeholderTextColor={ isDarkMode ? Colors.white : Colors.black}
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />
            <CoustomInput
                placeholderTextColor={ isDarkMode ? Colors.white : Colors.black}
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CoustomInput
                placeholderTextColor={ isDarkMode ? Colors.white : Colors.black}
                placeholder="Conform Password"
                value={conformPassword}
                setValue={setConformPassword}
                secureTextEntry={true}
            />
            <Button
                text="Register"
                onPress={() => Auth.signUp(username ,email, password)}
                containerStyles={{ backgroundColor: '#f3d078', width: '100%', }}
            />
            <Text style={styles.text}>
                BY registering, you confirm that you accept our{' '}
                <Text style={styles.link} onPress={onTermsOfCondition}>Terms of User</Text> and{' '}
                <Text style={styles.link} onPress={onPrivacyPolicy}>Privacy Policy</Text>
            </Text>
        </View>
    )
}

export default Signup;