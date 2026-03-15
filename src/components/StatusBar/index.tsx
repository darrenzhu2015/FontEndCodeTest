import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

const StatusBar: React.FC = () => {
  return (
    <View className="status-bar">
      <View className="status-bar-left">
        <Text className="time">9:41</Text>
      </View>
      <View className="status-bar-right">
        <View className="signal">
          <View className="signal-bar"></View>
          <View className="signal-bar"></View>
          <View className="signal-bar"></View>
          <View className="signal-bar"></View>
        </View>
        <View className="wifi">
          <View className="wifi-icon"></View>
        </View>
        <View className="battery">
          <View className="battery-body">
            <View className="battery-level"></View>
          </View>
          <View className="battery-cap"></View>
        </View>
      </View>
    </View>
  )
}

export default StatusBar
