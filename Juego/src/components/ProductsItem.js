import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react"

const ProductsItem = ({item, onSelected}) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onSelected(item)}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={{uri: "https://www.gastrolabweb.com/u/fotografias/m/2020/10/16/f608x342-4330_34053_15.jpg"}}/>
            </View>
            <View style={styles.textContainer}>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>${item.price}</Text>
            </View>     
        </TouchableOpacity>
    )
}

export default ProductsItem

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 20,
    },
    imageContainer: {
        height: "60%"
    },
    textContainer: {
        height: "40%"
    },
    image: {
        height: "100%",
        width: "100%"
    }
})