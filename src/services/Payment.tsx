import firebase from "@react-native-firebase/firestore";
import { Alert } from "react-native";

const addPayment = async (totalPrice) => {
    return await firebase()
        .collection('payment')
        .doc()
        .set({ totalPrice })
        .catch(err => err)
}


export default Payment = {
    addPayment,
}