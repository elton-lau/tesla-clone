import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'

export default function CarItem({ name, tagLine, tagLineCTA, image }) {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagLine}{' '}
                    <Text style={styles.tagLineCTA}>{tagLineCTA}</Text>
                </Text>
            </View>
            <View style={styles.buttonsGroup}>
                <StyledButton buttonText="Custom Order" type='primary' onPress={() => { console.warn('custom order was pressed.') }} />
                <StyledButton buttonText="Existing Inventory" type='secondary' onPress={() => { console.warn('Existing Inventory was pressed.') }} />
            </View>
        </View>
    )
}