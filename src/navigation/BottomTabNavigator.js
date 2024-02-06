import React from 'react';
import Home from "../screens/Home";
import Message from "../screens/Message";
import { Image, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Search from '../screens/Search';
import Comunity from '../screens/Comunity';
import Notification from '../screens/Notification'
import { Feather } from '@expo/vector-icons';
import TopTabNavigator from './TopTabNavigator';
import { headerOptions } from './HeaderOptions';

const BottomTab = createBottomTabNavigator();

const Stack = createStackNavigator();




const BottomTabNavigator = () =>
{
    return (
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen
                    name=' '
                    component={TopTabNavigator}
                    options={headerOptions.home}
                />
                <BottomTab.Screen
                    name='  '
                    component={Search}
                    options={headerOptions.search}
                />
                <BottomTab.Screen
                    name='   '
                    component={Comunity}
                    options={headerOptions.comunity}
                />
                <BottomTab.Screen
                    name='    '
                    component={Notification}
                    options={headerOptions.notification}
                />
                <BottomTab.Screen
                    name='      '
                    component={Message}
                    options={headerOptions.message}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
};


export default BottomTabNavigator;
