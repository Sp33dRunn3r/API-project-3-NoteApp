

import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

function Home(props) {

    const [data, setData] = useState([])
    const [loading, SetIsLoading] = useState(true)

    const loadData = () => {
        fetch('http://192.168.56.1:3000/get', {
            method: 'GET'

        })
            .then(resp => resp.json())
            .then(article => {
                setData(article)
                SetIsLoading(false)
            })
            .catch(error => console.log(error))

    }

    useEffect(() => {
        loadData()
    }, [])

    const clickedItem = (data) => {
        props.navigation.navigate('Details', { data:data })
    }

    const renderData = (item) => {
        return (
            <Card style={styles.cardStyle}>
                <Text style={{ fontSize: 23 }} onPress = {() => clickedItem(item)}>{item.title}</Text>

            </Card>

        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderData(item)
                }}
                onRefresh={() => loadData()}
                refreshing={loading}
                keyExtractor={item => `${item.id}`} />

            <FAB
                style={styles.fab}
                small={flase}
                icon="plus"
                theme={{ colors: { accent: "green" } }}
                onPress={() => props.navigaton.navigate('Create')} />
        </View>
    )
}
const styles = StyleSheet.create({
    cardStyle: {
        margin: 10,
        padding: 10
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0
    }
})
export default Home
