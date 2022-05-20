import { StyleSheet, useColorScheme } from 'react-native';

const styles = StyleSheet.create({
    root: {
        padding: 10,
        marginTop: 20,
    },
    row: {
        marginVertical: 5,
    },
    country: {
        height: 40,
        borderRadius: 5,
        borderWidth: 0,
        borderColor: '#a15e1b',
        backgroundColor: '#E3E6E6',
        shadowColor: '0 2px 5px 0 rgb(213 217 217 / 50%)',
    },
    countryTitle: {
        fontSize: 18,
    },
    label: {
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 5,
        height: 40,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 2,
        
    },
    errorLabel: {
        color: 'red',
    },
})

export default styles;