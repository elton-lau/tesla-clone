import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React from 'react'
import cars from './cars'
import CarItem from '../CarItem'

const CarList = () => {
    console.warn(Dimensions)
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item, index} ) => {
                    return <CarItem car={item} />
                }}
                snapToAlignment="start"
                decelerationRate="fast"
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CarList

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
})