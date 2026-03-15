import React from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

const NavBar = ({ title, showBack = true, showHome = false }) => {
  const handleBack = () => {
    Taro.navigateBack()
  }

  return (
    <View className="nav-bar">
      <View className="nav-bar-left">
        {showBack && (
          <View className="back-btn" onClick={handleBack}>
            <View className="chevron-left">
              <View className="chevron-line"></View>
              <View className="chevron-line"></View>
            </View>
          </View>
        )}
      </View>
      
      <View className="nav-bar-center">
        <Text className="nav-title">{title}</Text>
      </View>
      
      <View className="nav-bar-right">
        <View className="capsule">
          <View className="more-btn">
            <View className="dot"></View>
            <View className="dot"></View>
            <View className="dot"></View>
          </View>
          <View className="divider"></View>
          <View className="close-btn">
            <View className="close-line"></View>
            <View className="close-line"></View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default NavBar