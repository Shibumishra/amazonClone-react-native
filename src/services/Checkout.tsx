import firebase from "@react-native-firebase/firestore";
import { Alert } from "react-native";

const addCheckout = (products, userAddress, paymentId, orderConform, totalPrice) => {
    return firebase()
        .collection('checkout')
        .doc()
        .set({ products, userAddress, paymentId, orderConform, totalPrice })
        .catch(err => err)
}


export default Checkout = {
    addCheckout,
}