import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View, FlatList, ImageBackground, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native'

const Index = ({ navigation }) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(0)
    const [text, setText] = useState('')
    const isFocused = useIsFocused()

    useEffect(() => {
        if (isFocused) {
            CallFeeds()
        }
    }, [])

    //Search api calling
    const CallSearch = async () => {
        setLoading(true)
        await axios.get('https://newsapi.org/v2/everything?q=' + text + '&apiKey=7c94c4bf82af4e18a0ba534482945782')
            .then((result) => {
                console.log('articles', result.data.articles)
                setArticles(result.data.articles)
                setLoading(false)
            })
            .catch(err)
        {
            console.log('error', err)
        }
    }

    // Api Calling function 
    const CallFeeds = async () => {
        setLoading(true)
        await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7c94c4bf82af4e18a0ba534482945782&pageSize=10&page=' + page)
            .then((result) => {
                setArticles(result.data.articles)
                setLoading(false)

            })
    }

    // Flatlist data view 
    const Slide = ({ data, onPress }) => {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={styles.containerImg}>
                <View style={styles.imgbgcolor}>
                    <ImageBackground source={{ uri: data.urlToImage }}
                        imageStyle={{borderRadius:18}}
                        style={styles.bgImg}>
                        <Text style={styles.text}>{data.title}</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>

            {/* Header   */}
            <View style={styles.header}>
                <View style={{ width: '80%' }}>
                    <Text style={styles.headerText}> Top Headlines</Text>
                    <View style={styles.feild}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setText(text)}
                            placeholder='search'
                            value={text}
                        />
                        <Text onPress={CallSearch} style={{ paddingLeft: 10 }}>Search</Text>
                    </View>
                </View>

                <View style={{ width: '10%' }}>

                </View>

                <View style={{ width: '10%' }}>
                </View>
            </View>

            {/* NewsFeed Section  */}
            <View>
                <FlatList
                    data={articles}
                    renderItem={({ item, index }) => {
                        return (
                            <Slide
                                data={item}
                                onPress={() => navigation.navigate(('NewsDetail'), { item: item })}
                            />
                        )
                    }}
                    keyExtractor={(item) => item.id}

                />
            </View>
            {
                loading ?
                    <ActivityIndicator
                        size="large"
                        color="#dfdfdf"
                        style={styles.activity}
                    />
                    : <></>
            }
        </SafeAreaView>
    );

}
export default Index;