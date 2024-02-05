import React from 'react';
import Home from "./Home";
import Message from "./Message";
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import SanaOZel from './SanaOZel';
import TakipEdilen from './TakipEdilen';
import search from './search';
import comunity from './comunity';
import notification from './notification';
import { Feather } from '@expo/vector-icons';
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();




const TopTabNavigator = () =>
{
    return (
        <TopTab.Navigator>
            <TopTab.Screen
                name="Sana Özel"
                component={SanaOZel}
                options={{
                    tabBarLabelStyle: {
                        fontWeight: 800
                    }
                }}

            />
            <TopTab.Screen
                name="Takip Edilenler"
                component={TakipEdilen}
                options={{
                    tabBarLabelStyle: {
                        fontWeight: 800
                    }
                }}

            />
        </TopTab.Navigator>
    );
};

const BottomTabNavigator = () =>
{
    return (
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen
                    name=' '
                    component={TopTabNavigator}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                        headerTitle: () => (
                            <Image
                                source={require('../assets/xloggo.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        ),
                        headerLeft: () => (
                            <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/vesika.jpg')}
                                    style={{ width: 30, height: 30, borderRadius: 50, marginLeft: 10 }}
                                />
                            </View>
                        ),
                        headerRight: () => (
                            <View style={{ marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name="settings-outline" size={22} color={'black'} />
                            </View>
                        ),
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 16,
                        },
                    }}
                />
                <BottomTab.Screen
                    name='  '
                    component={search}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="search" size={size} color={color} />
                        ),
                        headerTitle: () => (
                            <Image
                                source={require('../assets/xloggo.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        ),
                        headerLeft: () => (
                            <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/vesika.jpg')}
                                    style={{ width: 30, height: 30, borderRadius: 50, marginLeft: 10 }}
                                />
                            </View>
                        ),
                        headerRight: () => (
                            <View style={{ marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name="settings-outline" size={22} color={'black'} />
                            </View>
                        ),
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 16,
                        },
                    }}
                />
                <BottomTab.Screen
                    name='   '
                    component={comunity}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="people" size={size} color={color} />
                        ),
                        headerTitle: () => (
                            <Image
                                source={require('../assets/xloggo.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        ),
                        headerLeft: () => (
                            <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/vesika.jpg')}
                                    style={{ width: 30, height: 30, borderRadius: 50, marginLeft: 10 }}
                                />
                            </View>
                        ),
                        headerRight: () => (
                            <View style={{ marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name="settings-outline" size={22} color={'black'} />
                            </View>
                        ),
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 16,
                        },
                    }}
                />
                <BottomTab.Screen
                    name='    '
                    component={notification}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="notifications-outline" size={24} color="black" />
                        ),
                        headerTitle: () => (
                            <Image
                                source={require('../assets/xloggo.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        ),
                        headerLeft: () => (
                            <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/vesika.jpg')}
                                    style={{ width: 30, height: 30, borderRadius: 50, marginLeft: 10 }}
                                />
                            </View>
                        ),
                        headerRight: () => (
                            <View style={{ marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name="settings-outline" size={22} color={'black'} />
                            </View>
                        ),
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 16,
                        },
                    }}
                />
                <BottomTab.Screen
                    name='      '
                    component={Message}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="mail" size={24} color="black" />
                        ),
                        headerTitle: () => (
                            <Image
                                source={require('../assets/xloggo.png')}
                                style={{ width: 40, height: 40 }}
                            />
                        ),
                        headerLeft: () => (
                            <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/vesika.jpg')}
                                    style={{ width: 30, height: 30, borderRadius: 50, marginLeft: 10 }}
                                />
                            </View>
                        ),
                        headerRight: () => (
                            <View style={{ marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name="settings-outline" size={22} color={'black'} />
                            </View>
                        ),
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 16,
                        },
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigator;
