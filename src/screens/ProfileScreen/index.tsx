import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import { Auth } from '../../services';


const ProfileScreen = ({ user }) => {
    return (
        <View>
            <Text>
                <Text>Welcome {user.email}</Text>
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