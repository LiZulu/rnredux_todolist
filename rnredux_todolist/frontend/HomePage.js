import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './Colors'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default class App extends React.Component
{
    render() 
    {
        return (
            <View style={style.container}>
                <View style={{flexDirection: "row"}}> 
                    <View style={styles.divider} />
                    <Text style={styles.title}>
                        Todo <Text style={{ fontWeight: "300", color: colors.blue }}> Lists </Text>
                    </Text>

                    <View style={styles.divider} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },

    divider: {
        backgroundColor: colors.lightBlue,
        height: 1,
        flex: 1,
        alignSelf: 'center',
    },

    title:
    {
        fontSize: 38,
        fontWeight: "800",
        color: colors.black,
        paddingHorizontal: 64,
    }
})