import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import AboutScreen from './screens/AboutScreen'
import ProdutoScreen from './screens/ProdutoScreen'


const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name='Home'
          component={HomeScreen}
          options={{
            title: 'Inicio',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name='home' color={color} size={size} />
            )
          }} />
        <Drawer.Screen name='Details' 
        component={DetailsScreen} 
        options={{
          title: 'Detalhes',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name='details' color={color} size={size} />
          )
        }} />
        <Drawer.Screen name='About' 
        component={AboutScreen}
        options={{
          title: 'Sobre',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name='adb' color={color} size={size} />
          )
        }} />
        <Drawer.Screen name='Produto'
         component={ProdutoScreen}
         options={{
          title: 'Produto',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name='production-quantity-limits' color={color} size={size} />
          )
        }} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
