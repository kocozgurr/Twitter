import { View, Text, ScrollView, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const data = [
    {
        id: '1',
        isim: 'Boşuna Tıklama',
        username: 'tıklamabosuna',
        post: "Hadise'nin, bir pırlanta firmasıyla 2024 yılı için 45 milyon TL'lik reklam anlaşması imzaladığı iddia edildi. (Posta)",
        profilePic: require('../assets/pp1.jpg'),
        postPic: require('../assets/hadise.jpg'),
    },
    {
        id: '2',
        isim: 'Zam Haber',
        username: 'zamhaber',
        post: "3.500 dolar fiyatlı Apple Vision Pro satın alan bir kişi gündelik kullanımını kayda aldı.",
        profilePic: require('../assets/pp2.jpg'),
        postPic: require('../assets/vision.jpg'),
    },
    {
        id: '3',
        isim: 'Tuhaf Gercek',
        username: 'tuhafgercek',
        post: "Kedi ile köpeğinin tatlı kavgasında, Türkçe kelimeleri anlayan köpek büyük beğeni topladı.",
        profilePic: require('../assets/pp3.jpg'),
        postPic: require('../assets/kedikopek.jpg'),
    },
    {
        id: '4',
        isim: 'Out OF context',
        username: 'context',
        post: "Öykü Karayel ile evli olan Can Bonomo: 6 yıldır evliyiz. Evlenince düşünmeyi bıraktım. Eşim zaten daha iyisini benim için düşünüyor",
        profilePic: require('../assets/vesika.jpg'),
        postPic: require('../assets/öykü.jpg'),
    },

];

const Tweets = () =>
{
    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <Image style={styles.pp} source={item.profilePic} />
            </View>
            <View style={styles.rightSide}>
                <Text style={styles.isim}>{item.isim}<Text style={styles.kad}> @{item.username}</Text></Text>
                <Text style={styles.postCont}>{item.post}</Text>
                <Image style={styles.postpic} source={item.postPic} />
            </View>
        </View>
    );


    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },

    leftSide: {
        flex: 1, // Sol tarafın genişliği, sağ tarafın iki katı kadar.

    },
    rightSide: {
        flex: 4, // Sağ tarafın genişliği, sol tarafın genişliğinin iki katı kadar.

    },
    pp: {
        height: 50,
        borderRadius: 50,
        width: 50,
        margin: 20
    },
    isim: {
        marginTop: 20,
        marginLeft: -10,
        fontSize: 16,
        fontWeight: '800',
    },
    kad: {
        fontWeight: '300',
        color: 'gray'
    },
    postCont: {

        marginLeft: '-2%',
        marginTop: '2%'
    },
    postpic: {
        marginTop: 10,
        width: '90%',
        objectFit: 'fill',
        borderRadius: 10
    }
});

export default Tweets