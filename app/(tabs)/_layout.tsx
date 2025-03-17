import { Tabs } from 'expo-router';
import React from 'react';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import MenuHeader from '@/components/ui/MenuHeader';
import { PaperProvider } from 'react-native-paper';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider>
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
            headerRight: () => (<MenuHeader/>),
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
            headerRight: () => (<MenuHeader/>),
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart.fill" color={color} />,
            tabBarStyle: {
              backgroundColor: '#d70b26',
            },
            tabBarActiveTintColor:'#f7f7f7',
            tabBarInactiveTintColor:'#591e03'
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
