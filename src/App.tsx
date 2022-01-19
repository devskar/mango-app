import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import React from 'react';
import styleProperties from './config/styleProperties';
import AddTransactionScreen from './screens/AddTransactionScreen';
import MainScreen from './screens/MainScreen';
import { RootStackParamList } from './screens/RootStackParams';
import TransactionScreen from './screens/TransactionScreen';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [loaded] = useFonts({
    Quicksand: require('../assets/fonts/Quicksand-VariableFont_wght.ttf'),
  });
  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: styleProperties.primary_background_color,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontSize: 28,
            fontWeight: '500',
            fontFamily: 'Quicksand',
            color: 'black',
          },
          headerTintColor: styleProperties.primary_highlight_color,
          headerBackTitleStyle: {
            fontSize: 18,
            fontWeight: '300',
            fontFamily: 'Quicksand',
          },
        }}
        initialRouteName='Main'
      >
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='Transactions' component={TransactionScreen} />
        <Stack.Screen
          name='AddTransaction'
          component={AddTransactionScreen}
          options={{ title: 'new Transaction' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
