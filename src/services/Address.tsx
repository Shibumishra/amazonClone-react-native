import firebase from "@react-native-firebase/firestore";
import { Alert } from "react-native";

const addAddress = (User, productId, country, fullname, phone, address, city) => {
    return firebase()
        .collection('address')
        .doc()
        .set({ User, productId, country, fullname, phone, address, city })
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


export default Address = {
    addAddress,
}