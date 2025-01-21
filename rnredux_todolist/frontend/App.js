import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './Colors'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Profile'>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Profile" component={ProfilePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;