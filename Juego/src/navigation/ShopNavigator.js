import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ProductsScreen from "../screens/ProductsScreen";

import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator()

export default ShopNavigator = () => {
    return(
            <Stack.Navigator 
            initialRouteName="Categories" 
            screenOptions={{
                headerStyle: {backgroundColor: COLORS.primary},
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}>
                <Stack.Screen 
                name="Categories" 
                component={CategoriesScreen} 
                options={{
                    title: "Mi Bakery",
                }}/>
                <Stack.Screen 
                name="Products" 
                component={ProductsScreen} 
                options={({route}) => ({
                    title: route.params.title,
                })}/>
                <Stack.Screen 
                name="Details" 
                component={DetailsScreen}
                
                /*Aca abajo tampoco me reconoce el route.params.name me da error undefined
                options={({route}) => ({
                    title: route.params.name,
                })}*/
                />
            </Stack.Navigator>
    )
}