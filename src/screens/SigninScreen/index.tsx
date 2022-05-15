import React, { useState } from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import CoustomInput from '../../components/CoustomInput';
import logo from '../../images/amazon.png';
import styles from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Auth } from '../../services';

const Signin = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignIn = () => {
        console.warn('on SignIn');
        Auth.signIn(email, password)
    }

    const onAccount = () => {
        navigation.navigate('Signup')
    }
    const forgotPassword = () => {
        navigation.navigate('ForgotPassword')
    }

    return (
        <View style={styles.root}>
            <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
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
            <Button
                text="Sign In"
                onPress={() => Auth.signIn(email, password)}
                containerStyles={{ backgroundColor: '#f3d078', width: '100%', }}
            />
            <Button
                text="Forgot Password"
                onPress={forgotPassword}
                containerStyles={{ backgroundColor: '#fff', width: '100%', }}
            />
            <Button
                text="New to Amazon? Create account"
                onPress={onAccount}
                containerStyles={{ backgroundColor: '#07e3a8', width: '100%' }}
            />
        </View>
    )
}

export default Signin;