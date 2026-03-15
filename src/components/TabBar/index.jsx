import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

const TabBar = ({ activeIndex = 0 }) => {
  return (
    <View className="tab-bar">
      <View className="tab-bar-safe-area">
        <View className="tab-bar-content">
          <View className={`tab-item ${activeIndex === 0 ? 'active' : ''}`}>
            <View className="tab-icon home-icon"></View>
            <Text className="tab-text">首页</Text>
          </View>
          <View className={`tab-item ${activeIndex === 1 ? 'active' : ''}`}>
            <View className="tab-icon category-icon"></View>
            <Text className="tab-text">分类</Text>
          </View>
          <View className={`tab-item ${activeIndex === 2 ? 'active' : ''}`}>
            <View className="tab-icon cart-icon"></View>
            <Text className="tab-text">购物车</Text>
          </View>
          <View className={`tab-item ${activeIndex === 3 ? 'active' : ''}`}>
            <View className="tab-icon profile-icon"></View>
            <Text className="tab-text">我的</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TabBar