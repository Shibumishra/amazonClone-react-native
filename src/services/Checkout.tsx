import firebase from "@react-native-firebase/firestore";
import { Alert } from "react-native";

const addCheckout = (products, userAddress, paymentId, conformOrder) => {
    return firebase()
        .collection('checkout')
        .doc()
        .set({ products, userAddress, paymentId, conformOrder })
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


export default Checkout = {
    addCheckout,
}