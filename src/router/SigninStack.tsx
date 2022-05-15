import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/SigninScreen';
import Signup from '../screens/SignupScreen';
import ForgotPassword from '../screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const SigninStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Signin" component={Signin} options={{ title: 'Signin' }} />
            <Stack.Screen name="Signup" component={Signup} options={{ title: 'Create account' }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forget Password' }} />
        </Stack.Navigator>
    )
}

export default SigninStack;