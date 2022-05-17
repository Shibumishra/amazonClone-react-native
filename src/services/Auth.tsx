import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/firestore";

const createUserInDb = (uid, fullname, email) => {
    return firestore().collection('users').doc(uid).set(
        {
            uid,
            fullname,
            email
        }
    )
}

const signUp = (fullname, email, password) => {

    if (!fullname || !email || !password) {
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            const { uid } = cred.user;

            auth().currentUser?.updateProfile({
                displayName: fullname
            })

            return uid
        })
        .then(uid => createUserInDb(uid, fullname, email))
        .catch(
            err => Alert.alert(err.code, err.message)
        )
}

const signIn = (email, password) => {
    if (!email || !password) {
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().signInWithEmailAndPassword(email, password)
        .then(() => { })
        .catch(
            err => Alert.alert((err.code, err.message))
        )
}


const forgetPassword = (email) => {
    if (!email) {
        Alert.alert('Error', 'Please enter email')
    }

    return auth().sendPasswordResetEmail(email)
}

const signOut = () => {
    return auth().signOut()
}



const getUser = () => {
    return firebase()
        .collection('users')
        .get()
        .then(querySnapshot => {
            const users = []
            querySnapshot.forEach(user => users.push(user.data()))
            return User;
        })
        .catch(err => err)
}

const Auth = {
    signIn,
    signUp,
    forgetPassword,
    signOut,
    getUser
}

export default Auth;