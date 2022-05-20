import React from 'react'
import { SafeAreaView, View, TextInput, useColorScheme, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';


interface HeaderComponentProps {
    searchValue: string;
    searchFilterFunction: (searchFilterFunction: string) => void;
}


const Header = ({ searchValue, searchFilterFunction, }: HeaderComponentProps) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={styles.header} >
            <View
                style={styles.section}>
                <View style={[styles.inputView
                ]} >
                    <Feather name="search" size={20} style={{ color: isDarkMode ? Colors.white : Colors.black }} />
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={ isDarkMode ? Colors.white : Colors.black}
                        placeholder="Search Amazon.in"
                        onChangeText={(text) => searchFilterFunction(text)}
                        value={searchValue}
                    />
                </View>
                <View>
                    <AntDesign name="scan1" size={20} style={{ color: isDarkMode ? Colors.white : Colors.black }} />
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#22e3dd',
    },
    section: {
        margin: 10,
        padding: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: "space-between"
    },
    inputView: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        height: 40,
        marginLeft: 10,
        color: 'green',
    }
})
export default Header;