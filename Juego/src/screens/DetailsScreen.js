import {Button, StyleSheet, Text, View} from 'react-native'
import React , {useEffect} from 'react'

const DetailsScreen = ({navigation, route}) => {

    useEffect(() => {
        console.log(route.params)
    }, [])

    return (
        <View style={styles.container}>
            {/* aqui abajo no me quiere funcionar el route.params.name me da error undefined*/}
            <Text>Titulo</Text>
            <Button title="Go to Products" onPress={()=> navigation.navigate("Products")}/>
            <Button title="Go to Categories" onPress={()=> navigation.popToTop()}/>
        </View>
    )
}

export default DetailsScreen

const styles =  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  })
  

