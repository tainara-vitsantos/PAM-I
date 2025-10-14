import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import AboutScreen from './screens/AboutScreen'
import ProdutoScreen from './screens/ProdutoScreen'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name='Home'
          component={HomeScreen}
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name='home' color={color} size={size} />
            )
          }} />
        <Tab.Screen name='Details' 
        component={DetailsScreen} 
        options={{
          title: 'Detalhes',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='details' color={color} size={size} />
          )
        }} />
        <Tab.Screen name='About' 
        component={AboutScreen}
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='adb' color={color} size={size} />
          )
        }} />
        <Tab.Screen name='Produto'
         component={ProdutoScreen}
         options={{
          title: 'Produto',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='production-quantity-limits' color={color} size={size} />
          )
        }} /> 
      </Tab.Navigator>
    </NavigationContainer>
  )
}
