import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SanaOZel from '../screens/SanaOZel'
import TakipEdilen from '../screens/TakipEdilen';

const TopTab = createMaterialTopTabNavigator();

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

export default TopTabNavigator;
