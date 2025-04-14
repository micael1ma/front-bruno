
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import {Text, Touchable, TouchableOpacity} from 'react-native'
import { Divider, Menu } from 'react-native-paper'

const MenuHeader = () => {
  const [visible, setVisible] = React.useState(false)
  const router = useRouter()
  return (
    <Menu 
      visible={visible}
      onDismiss={()=>setVisible(false)}
      anchor={
        <TouchableOpacity onPress={()=>setVisible(true)} style={{marginEnd: 8}}>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="#f7f7f7"/>
        </TouchableOpacity>
      }
    >
      <Menu.Item title={<Text>Profile</Text>}></Menu.Item> 
      <Menu.Item title={<Text>Setting</Text>}></Menu.Item> 
      <Menu.Item onPress={() => router.replace('/chat')} title={<Text>Talk with IA</Text>}></Menu.Item> 
      <Divider style={{backgroundColor:'#d70b26', height: 2}}/>
      <Menu.Item onPress={() => router.replace('/welcome')} title={<Text>Log Out</Text>}></Menu.Item>

    </Menu>
  )
}
export default MenuHeader