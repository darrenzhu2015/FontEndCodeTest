import React, { useState } from 'react'
import { View, Text, Input } from '@tarojs/components'
import StatusBar from '../../components/StatusBar'
import NavBar from '../../components/NavBar'
import InputField from '../../components/InputField'
import TabBar from '../../components/TabBar'
import './index.scss'

const Index: React.FC = () => {
  const [formData, setFormData] = useState({
    account: '12345678901',
    pac: 'xxxxxxxxxx',
    field3: 'xxxxxxxxxx'
  })

  return (
    <View className="page-container">
      <StatusBar />
      <NavBar 
        title="个人信息" 
        showBack={true}
        showHome={false}
      />
      
      <View className="content">
        <View className="form-section">
          <InputField
            label="账号"
            value={formData.account}
            placeholder="请输入用户名"
            editable={false}
          />
          <InputField
            label="PAC"
            value={formData.pac}
            placeholder="请输入用户名"
            editable={false}
          />
          <InputField
            label=""
            value={formData.field3}
            placeholder="请输入用户名"
            editable={false}
          />
        </View>
      </View>

      <TabBar activeIndex={0} />
    </View>
  )
}

export default Index
