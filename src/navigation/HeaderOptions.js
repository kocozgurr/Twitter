

import { Image, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const loggo = require('../assets/xloggo.png');
const pp = require('../assets/vesika.jpg');


const styles = StyleSheet.create({
    header: { width: 30, height: 30, borderRadius: 50, marginLeft: 10 }
});



export const headerOptions = {
    home:
    {
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
        ),
        headerTitle: () => (
            <Image
                source={loggo}
                style={{ width: 40, height: 40 }}
            />
        ),
        headerLeft: () => (
            <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={pp}
                    style={styles.header}
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
        }
    },
    search: {
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
        ),
        headerTitle: () => (
            <Image
                source={loggo}
                style={{ width: 40, height: 40 }}
            />
        ),
        headerLeft: () => (
            <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={pp}
                    style={styles.header}
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
        }
    },
    comunity: {
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
        ),
        headerTitle: () => (
            <Image
                source={loggo}
                style={{ width: 40, height: 40 }}
            />
        ),
        headerLeft: () => (
            <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={pp}
                    style={styles.header}
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
        }
    },
    notification: {
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
        ),
        headerTitle: () => (
            <Image
                source={loggo}
                style={{ width: 40, height: 40 }}
            />
        ),
        headerLeft: () => (
            <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={pp}
                    style={styles.header}
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
        }
    },
    message: {
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail" size={size} color={color} />
        ),
        headerTitle: () => (
            <Image
                source={loggo}
                style={{ width: 40, height: 40 }}
            />
        ),
        headerLeft: () => (
            <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={pp}
                    style={styles.header}
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
        }
    },
};


export default headerOptions;
