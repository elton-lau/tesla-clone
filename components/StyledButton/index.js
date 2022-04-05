import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

export default function StyledButton({ buttonText, type = 'primary', onPress }) {

  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
  const textColor = type === 'primary' ? '#FFFFFF' : "#171A20"

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}>
        <Text style={[styles.text, { color: textColor }]}>{buttonText.toUpperCase()}</Text>
      </Pressable>
    </View>
  )
}