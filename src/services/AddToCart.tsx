import firebase from "@react-native-firebase/firestore";
import { Alert } from "react-native";

const addProduct = async (data) => {
    return await firebase()
        .collection('products')
        .doc()
        .set({ data })
        .catch(err => err)
}

const getProduct = async () => {
    return await firebase()
        .collection('products')
        .get()
        .then(snap => {
            const products = []
            snap.forEach(product => {
                products.push({
                    ...product.data(),
                    id: product.id,
                })
            })
            return products;
        })
        .catch(err => err)
}


export default AddToCartProduct = {
    addProduct,
    getProduct
}