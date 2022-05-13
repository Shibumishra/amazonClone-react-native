import React from 'react'
import { Text, SafeAreaView, View, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';


interface HeaderComponentProps {
    searchValue: string;
    setSearchValue: (setSearchValue: string) => void;
}


const Header = ({ searchValue, setSearchValue, }: HeaderComponentProps) => {

    return (
        <SafeAreaView style={{ backgroundColor: '#22e3dd' }}>
            <View
                style={{
                    margin: 10,
                    padding: 5,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 5,
                    justifyContent: "space-between"
                }}>
                <View style={{
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Feather name="search" size={20} />
                    <TextInput
                        style={{ height: 40, marginLeft: 10 }}
                        placeholder="Search Amazon.in"
                        value={searchValue}
                        onChangeText={setSearchValue}
                    />
                </View>
                <View>
                    <AntDesign name="scan1" size={20} />
                </View>
            </View>
            
        </SafeAreaView>
    )
}

export default Header;