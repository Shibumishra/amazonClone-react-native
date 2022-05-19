import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Alert, ScrollView, KeyboardAvoidingView, Platform, } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import ContryList from 'country-list';
import Button from '../../components/Button';
import styles from './styles';
import { Address, Checkout, Payment } from '../../services';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import RazorpayCheckout from 'react-native-razorpay';
import Octicons from 'react-native-vector-icons/Octicons';

const countrys = ContryList.getData();

const AddressScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [country, setCountry] = useState(countrys[0].code);
    const [fullname, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');
    const [city, setCity] = useState('');
    const [user, setUser] = useState(null);
    const [deleted, setDeleted] = useState(false);


    const User = user ? user?.email : user;
    const { productId } = route.params
    const totalPrice = Math.floor(route.params?.totalPrice * 100 || 0);
    const { products } = route.params
    const userAddress = { User, totalPrice, productId, country, fullname, phone, address, city }


    const deleteFirestoreData = () => {
        firestore()
            .collection('products')
            .doc(productId)
            .delete()
            .then(() => {
                setDeleted(true);
            })
            .catch((e) => console.log('Error deleting posst.', e));
    };


    const makePayment = () => {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://pbs.twimg.com/profile_images/1214220012979920898/N4tFtfjN_400x400.png',
            currency: 'INR',
            key: 'rzp_test_fk8lfiNJSir6lr',
            amount: totalPrice,
            name: 'Amazon',
            prefill: {
                email: User,
                contact: phone,
                name: 'Razorpay Software'
            },
            theme: { color: '#F37254' }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            const paymentId = data.razorpay_payment_id
            const conformOrder = "Order Conform"
            Alert.alert('Success:',  `Our ${conformOrder}`, [
                { text: 'Close', onPress: () => console.log('alert CLosed') }
            ]);
            deleteFirestoreData()
            Checkout.addCheckout(products, userAddress, paymentId, conformOrder)
            navigation.navigate('HomeStack')
            return;
        }).catch((error) => {
            // handle failure
            Alert.alert(`Error: ${error.code} | ${error.description}`);
            return;
        });
    }



    const onAuthStateChanged = (user) => {
        setUser(user);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    // useEffect(() => {
    //     const Products = firestore()
    //         .collection('products')
    //         .get()
    //         .then(querySnapshot => {
    //             querySnapshot.forEach(documentSnapshot => {
    //                 setProductId(documentSnapshot.id)
    //             });
    //         });
    //     return () => Products();
    // }, []);


    const onCheckout = async () => {

        if (addressError) {
            Alert.alert('Fix all field errors before submiting');
            return;
        }

        if (!fullname) {
            Alert.alert('Please fill in the Fullname field');
            return;
        }

        if (!phone) {
            Alert.alert('Please fill in the phone number field');
            return;
        }

        Address.addAddress(userAddress)
            .then(() => {
                makePayment()
            })
            .catch(
                err => Alert.alert(err.code, err.message))
    }

    const validateAddress = () => {
        if (address.length < 3) {
            setAddressError('Address is too short');
        }
    };



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
            <ScrollView style={styles.root}>
                <View style={styles.row}>
                    <Text style={styles.label}>Country</Text>
                    <View style={styles.country}>
                        <Picker

                            selectedValue={country}
                            onValueChange={(itemValue) =>
                                setCountry(itemValue)
                            }
                        >
                            {countrys.map(country => (
                                <Picker.Item value={country.code} label={country.name} />
                            ))}
                        </Picker>
                    </View>
                </View>

                <View>
                    <Text style={styles.label}>Full name (First and Last name)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Full name"
                        value={fullname}
                        onChangeText={setFullName}
                    />
                </View>
                {/* Phone number */}
                <View style={styles.row}>
                    <Text style={styles.label}>Phone number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone number"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType={'phone-pad'}
                    />
                </View>

                {/* Address */}
                <View style={styles.row}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        value={address}
                        onEndEditing={validateAddress}
                        onChangeText={text => {
                            setAddress(text);
                            setAddressError('');
                        }}
                    />
                    {!!addressError && (
                        <Text style={styles.errorLabel}>{addressError}</Text>
                    )}
                </View>

                {/* City */}
                <View style={styles.row}>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="City"
                        value={city}
                        onChangeText={setCity}
                    />
                </View>
                < Button
                    text="Checkout"
                    onPress={onCheckout}
                    containerStyles={{ backgroundColor: '#f59b42', }}
                />

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddressScreen;