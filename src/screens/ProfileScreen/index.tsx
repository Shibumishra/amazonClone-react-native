import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import { Auth } from '../../services';
import firestore from '@react-native-firebase/firestore';

const ProfileScreen = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const subscriber = firestore()
            .collection('users')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    setUsers(documentSnapshot.data())
                    setLoading(false)
                });
            });

        return () => subscriber();
    }, []);


    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <View>
            <Text>
                <Text>Welcome to, {users?.fullname}</Text>
            </Text>
            <TouchableOpacity>
                <Button text="SignOut"
                    onPress={() => Auth.signOut()}
                    containerStyles={{ backgroundColor: '#07e3a8', width: '100%' }}></Button>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen;