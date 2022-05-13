import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/SigninScreen';
import Signup from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const SigninStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Signin" component={Signin} options={{ title: 'Signin' }} />
            <Stack.Screen name="Signup" component={Signup} options={{ title: 'Create account' }} />
        </Stack.Navigator>
    )
}

export default SigninStack;