import React from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import { DATA } from '../data'
import { Post } from '../components/Post'


export const MainScreen = (props) => {
    const openPostHeandler = (post) => {
        
      props.navigation.navigate('Post', {postId: post.id, date: post.date} )

    }
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={openPostHeandler}/>}
            />

        </View>
    ) 
}
MainScreen.navigationOptions = {
    headerTitle: 'Мой блог'

}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        padding: 10
    }
})