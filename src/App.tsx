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
            color: styleProperties.primary_text_color,
            width: '100%',
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
        <Stack.Screen
          name='Main'
          component={MainScreen}
          options={{ title: 'HOUSEHOLD OVERVIEW' }}
        />
        <Stack.Screen
          name='Transactions'
          component={TransactionScreen}
          options={{ title: 'TRANSACTIONS' }}
        />
        <Stack.Screen
          name='AddTransaction'
          component={AddTransactionScreen}
          options={{ title: 'NEW TRANSACTION' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
