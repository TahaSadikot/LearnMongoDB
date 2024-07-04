

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Register from './screens/auth/Register'
import LoginPage from './screens/auth/LoginPage'


export type RootStackParamList = {
  Register: undefined
  LoginPage: undefined
}

const stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='LoginPage'>
        <stack.Screen name="LoginPage" component={LoginPage} options={{
          headerShown: false
        }}></stack.Screen>
        <stack.Screen name="Register" component={Register} options={{
          headerShown: false
        }}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App

