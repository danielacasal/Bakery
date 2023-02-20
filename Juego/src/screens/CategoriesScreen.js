import {Button, StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import CaterogiesItem from '../components/CategoriesItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectedCategory } from '../store/actions/category.action'

const CategoriesScreen = ({navigation}) => {

  const categories =  useSelector(state=> state.categories.categories)
  const dispatch = useDispatch ()


  const handleSelectedCategory = item => {
    dispatch(selectedCategory(item.id))
    navigation.navigate("Products", {
      title: item.title,
    })
  }

  const renderCategoriesItem = ({item}) => (
  <View style={styles.categoriesContainer}>
    <CaterogiesItem item={item} onSelected={handleSelectedCategory}/>
  </View>
  )
    return (
        <View style={styles.container}>
          <FlatList 
            data={categories} 
            renderItem={renderCategoriesItem} 
            keyExtractor={item=>item.id}/>
        </View>
    )
}

export default CategoriesScreen

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
    categoriesContainer: {
      padding: 10,
      height: 155,
    },
})

