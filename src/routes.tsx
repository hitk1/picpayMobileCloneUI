import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

import PayButton from './components/PayButton'

// import { Container } from './styles';
import HomeScreen from './screens/Home'
import WalletScreen from './screens/Wallet'
import PayScreen from './screens/Pay'
import { View } from 'react-native';

const Tab = createBottomTabNavigator()

const icons: any = {
	Home: {
		lib: AntDesign,
		name: 'home'
	},
	Wallet: {
		lib: AntDesign,
		name: 'creditcard'
	},
	Notifications: {
		lib: Ionicons,
		name: 'ios-notifications-outline',
	},
	Settings: {
		lib: AntDesign,
		name: 'setting'
	}
}

const Routes: React.FC = () => {
  return (  
    <NavigationContainer>
		<Tab.Navigator
			screenOptions={({ route, navigation }) => ({
				tabBarIcon: ({ color, size, focused }) => {
					if(route.name === 'Pay')
						return (
							<PayButton
								onPress={() => navigation.navigate('Pay')}
								isFocused={focused}
							/>
						)

					const { lib: Icon, name }: { lib: any, name: string } = icons[route.name]
					return <Icon name={name} size={size} color={color}/>

				}
			})}
			tabBarOptions={{
				style: {
					backgroundColor: '#131418',
					borderTopColor: 'rgba(255, 255, 255, 0.2)',
					paddingBottom: 2
				},
				activeTintColor: "#FFF",
				inactiveTintColor: '#92929c'
			}}
		>
			<Tab.Screen 
				name="Home" 
				component={HomeScreen}
				options={{
					title: 'Início'
				}}
			/>
			<Tab.Screen 
				name="Wallet" 
				component={WalletScreen}
				options={{
					title: 'Carteira'
				}}	
			/>
			<Tab.Screen 
				name="Pay" 
				component={PayScreen}
				options={{
					title: ''
				}}	
			/>
			<Tab.Screen 
				name="Notifications" 
				component={PayScreen}
				options={{
					title: 'Notificações'
				}}	
			/>
			<Tab.Screen 
				name="Settings" 
				component={PayScreen}
				options={{
					title: 'Ajustes'
				}}	
			/>
		</Tab.Navigator>
	</NavigationContainer>
  )
}

export default Routes;