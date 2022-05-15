import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CoustomInput from '../../components/CoustomInput';
import styles from './styles';
import Button from '../../components/Button';
import { Auth } from '../../services';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');

    const onRegister = () => {
        console.warn('on Register');
        Auth.signUp(email, password)
    }

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
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />
            <CoustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />
            <CoustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CoustomInput
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