import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';

const Index = ({ navigation, route }) => {
    const { item } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.header}>
                <View style={{ width: '20%' }}>
                    <Text onPress={() => navigation.goBack()}>back</Text>
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={styles.headerText}
                        onPress={() => navigation.navigate('NewsDetail')}>News Detail</Text>
                </View>
            </View>
            <Image source={{ uri: item.urlToImage }} style={styles.img} />
            <View style={styles.box}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>Author: {item.author}</Text>
                <Text style={styles.author}>{item.description}</Text>
            </View>
        </SafeAreaView>
    );

}
export default Index;