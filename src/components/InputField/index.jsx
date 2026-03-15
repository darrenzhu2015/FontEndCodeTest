import React from 'react'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'

const InputField = ({ 
  label, 
  value, 
  placeholder = '', 
  editable = true 
}) => {
  return (
    <View className="input-field">
      <View className="input-wrapper">
        {label && (
          <View className="input-label">
            <Text className="label-text">{label}</Text>
          </View>
        )}
        <View className="input-content">
          <Text className="input-value">{value}</Text>
        </View>
      </View>
      <View className="input-border"></View>
    </View>
  )
}

export default InputField