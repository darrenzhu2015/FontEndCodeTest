import { useState } from 'react'
import { View, Text, Image, Navigator, Swiper, SwiperItem } from '@tarojs/components'
import './profile.scss'

interface MenuItemProps {
  label: string
  value?: string
  showArrow?: boolean
  onClick?: () => void
}

interface ProfileModuleProps {
  title: string
  items: MenuItemProps[]
}

const MenuItem: React.FC<MenuItemProps> = ({ label, value, showArrow = true, onClick }) => {
  return (
    <View className="menu-item" onClick={onClick}>
      <View className="menu-item-left">
        <Text className="menu-item-label">{label}</Text>
      </View>
      <View className="menu-item-right">
        {value && <Text className="menu-item-value">{value}</Text>}
        {showArrow && <Text className="menu-item-arrow">›</Text>}
      </View>
    </View>
  )
}

const ProfileModule: React.FC<ProfileModuleProps> = ({ title, items }) => {
  return (
    <View className="profile-module">
      <Text className="module-title">{title}</Text>
      <View className="module-content">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            label={item.label}
            value={item.value}
            showArrow={item.showArrow}
            onClick={item.onClick}
          />
        ))}
      </View>
    </View>
  )
}

const Profile: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(3)

  const mainInfoItems: MenuItemProps[] = [
    { label: '姓名', value: '万小益' },
    { label: '性别', value: '女' },
    { label: '年龄', value: '38岁' },
    { label: '身高', value: '162cm' },
    { label: '体重', value: '55kg' },
    { label: '透析日期', value: '2024-01-15' },
  ]

  const contactUsItems: MenuItemProps[] = [
    { label: '联系我们', showArrow: true },
  ]

  const legalItems: MenuItemProps[] = [
    { label: '隐私政策', showArrow: true },
    { label: '用户协议', showArrow: true },
  ]

  const handleLogout = () => {
    console.log('退出登录')
  }

  const handleContactUs = () => {
    console.log('联系我们')
  }

  const tabs = [
    { text: '今日记录', icon: 'record' },
    { text: '数据趋势', icon: 'trend' },
    { text: '治疗数据', icon: 'data' },
    { text: '我的', icon: 'user', active: true },
  ]

  return (
    <View className="profile-page">
      {/* Header */}
      <View className="header">
        <View className="navbar">
          <View className="navbar-left">
            <Text className="navbar-back">‹</Text>
          </View>
          <Text className="navbar-title">腹透日志</Text>
          <View className="navbar-right">
            <View className="navbar-capsule">
              <View className="navbar-more">
                <View className="more-dot"></View>
                <View className="more-dot"></View>
                <View className="more-dot"></View>
              </View>
              <View className="navbar-divider"></View>
              <View className="navbar-avatar">
                <Image 
                  className="avatar-img" 
                  src="https://img.icons8.com/ios-filled/50/ffffff/user.png" 
                  mode="aspectFit"
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Profile Section */}
      <View className="profile-section">
        <View className="profile-info">
          <View className="avatar-wrapper">
            <Image 
              className="avatar" 
              src="https://img.icons8.com/ios-filled/100/4a90d9/user.png" 
              mode="aspectFit"
            />
          </View>
          <Text className="user-name">万小益</Text>
        </View>
      </View>

      {/* Personal Info Card */}
      <View className="personal-info-card">
        <ProfileModule title="主要信息" items={mainInfoItems} />
        
        <ProfileModule 
          title="其他" 
          items={[
            { label: '联系我们', showArrow: true, onClick: handleContactUs },
          ]} 
        />
        
        <ProfileModule title="法律条款" items={legalItems} />

        <View className="actions">
          <View className="logout-btn" onClick={handleLogout}>
            <Text className="logout-text">退出登录</Text>
          </View>
        </View>
      </View>

      {/* Bottom TabBar */}
      <View className="tabbar">
        {tabs.map((tab, index) => (
          <View 
            key={index} 
            className={`tabbar-item ${tab.active ? 'active' : ''}`}
            onClick={() => setCurrentTab(index)}
          >
            <View className="tabbar-icon">
              {tab.icon === 'record' && <Text>📝</Text>}
              {tab.icon === 'trend' && <Text>📈</Text>}
              {tab.icon === 'data' && <Text>💊</Text>}
              {tab.icon === 'user' && <Text>👤</Text>}
            </View>
            <Text className="tabbar-text">{tab.text}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Profile
