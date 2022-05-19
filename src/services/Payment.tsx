import firebase from "@react-native-firebase/firestore";
import { Alert } from "react-native";

const addPayment = async (totalPrice) => {
    return await firebase()
        .collection('payment')
        .doc()
        .set({ totalPrice })
        .catch(err => err)
}

// const getAddress = () => {
//     return firebase()
//         .collection('address')
//         .get()
//         .then(snap => {
//             const products = []
//             snap.forEach(product => products.push(product.data()))
//             return products;
//         })
//         .catch(err => err)
// }


export default Payment = {
    addPayment,
}