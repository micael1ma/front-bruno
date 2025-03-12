import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerStyle: {
            backgroundColor: '#d70b26',
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#f7f7f7'
          },	
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          tabBarStyle: {
            backgroundColor: '#d70b26',
          },
          tabBarActiveTintColor:'#f7f7f7',
          tabBarInactiveTintColor:'#591e03'
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerStyle: {
            backgroundColor: '#d70b26',
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#f7f7f7'
          },	
          title: 'Cart',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart.fill" color={color} />,
          tabBarStyle: {
            backgroundColor: '#d70b26',
          },
          tabBarActiveTintColor:'#f7f7f7',
          tabBarInactiveTintColor:'#591e03'
        }}
      />
    </Tabs>
  );
}
