import { View, Text } from '@tarojs/components'
import './contactus.scss'

const ContactUs: React.FC = () => {
  return (
    <View className="contactus-page">
      {/* Header */}
      <View className="header">
        <View className="navbar">
          <View className="navbar-left">
            <Text className="navbar-back">‹</Text>
          </View>
          <Text className="navbar-title">联系我们</Text>
          <View className="navbar-right">
            <View className="navbar-capsule">
              <View className="navbar-more">
                <View className="more-dot"></View>
                <View className="more-dot"></View>
                <View className="more-dot"></View>
              </View>
              <View className="navbar-divider"></View>
              <View className="navbar-avatar">
                <Text className="avatar-icon">👤</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Content */}
      <View className="content">
        <View className="info-block">
          <Text className="info-label">联系地址</Text>
          <Text className="info-content">上海市浦东新区企荣路90号前滩国际广场12楼</Text>
        </View>

        <View className="info-block">
          <Text className="info-label">服务热线</Text>
          <Text className="info-content">400-821-5800</Text>
        </View>
      </View>

      {/* Tab Bar Placeholder */}
      <View className="tabbar-placeholder"></View>
    </View>
  )
}

export default ContactUs
