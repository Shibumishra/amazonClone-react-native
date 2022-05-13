import React, { useState } from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import CoustomInput from '../../components/CoustomInput';
import logo from '../../images/amazon.png';
import styles from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const Signin = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignIn = () => {
        console.warn('on SignIn')
    }

    const onAccount = () => {
        navigation.navigate('Signup')
    }
    return (
        <View style={styles.root}>
            <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
            <CoustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />

            <CoustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <Button
                text="Sign In"
                onPress={onSignIn}
                containerStyles={{ backgroundColor: '#f3d078', width: '100%', }}
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