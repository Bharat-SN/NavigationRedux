import React from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { useDispatch } from 'react-redux'
import { HollywoodMovies } from '../jsonFile/HollywoodData'


function HollyWood2() {
    const dispatch = useDispatch()
    const addItemToCart = item => dispatch({ type: ADD_LIKES, payload: item })

    return (
        <View style={styles.container}>
            <FlatList
                data={HollywoodMovies}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.bookItemContainer}>
                        <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
                        <View style={styles.bookItemMetaContainer}>
                            <Text style={styles.textTitle} numberOfLines={1}>
                                {item.name}
                            </Text>
                            <Text style={styles.textAuthor}>Release: {item.releaseYear}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={addItemToCart}
                                    style={styles.button}>
                                    <Text style={styles.buttonText}>Add +</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bookItemContainer: {
        flexDirection: 'row',
        padding: 10
    },
    thumbnail: {
        width: 100,
        height: 150
    },
    bookItemMetaContainer: {
        padding: 5,
        paddingLeft: 10
    },
    textTitle: {
        fontSize: 22,
        fontWeight: '400'
    },
    textAuthor: {
        fontSize: 18,
        fontWeight: '200'
    },
    buttonContainer: {
        position: 'absolute',
        top: 110,
        left: 10
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#24a0ed',
        padding: 5
    },
    buttonText: {
        fontSize: 22,
        color: '#fff'
    }
})

export default HollyWood2