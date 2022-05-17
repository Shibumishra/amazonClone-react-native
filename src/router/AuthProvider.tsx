import React, { Children, createContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import SigninStack from './SigninStack';
import HomeStack from './HomeStack';
import ProfileScreen from '../screens/ProfileScreen';

export const AuthProvider = () => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        <>
            {user ? <ProfileScreen /> : <SigninStack />}
        </>
    )
}
