import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";


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



const Auth = {
    signIn,
    signUp,
    forgetPassword,
    signOut
}

export default Auth;