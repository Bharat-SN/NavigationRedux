import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { HollywoodMovie } from '../actions'
import Carousel from '../components/carousel'

const initialState = {
    name: '',
    releaseYear: '',
    imgUrl: ''
}

class HollywoodMovies extends React.Component {
    state = initialState;

    HollywoodMovie = () => {
        this.props.dispatchHMovie(this.state);
    }

    render() {
        const { HollywoodMovies } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>HollyWood Movies</Text>
                <Carousel />
                <ScrollView style={styles.BooksContainer}>
                    {
                        HollywoodMovies.map((HMovie, index) => (
                            <View style={styles.book} key={index}>
                                <Image style={styles.Image} source={{ uri: HMovie.imgUrl }} />
                                <View>
                                    <Text>{HMovie.name}</Text>
                                    <Text>{HMovie.releaseYear}</Text>
                                    <TouchableOpacity>
                                        <Text>Like</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        height: 44,
        padding: 7,
        backgroundColor: '#ededed',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadious: 10,
        flex: 1,
        marginBottom: 5
    },
    BooksContainer: {
        borderWidth: 1,
        borderTopColor: 'red',
        flex: 1
    },
    addButton: {
        fontSize: 28,
        lineHeight: 28
    },
    addButtonContainer: {
        width: 80,
        height: 80,
        backgroundColor: 'pink',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    book: {
        padding: 20,
        flexDirection: 'row'

    },
    name: {
        fontSize: 18
    },
    author: {
        fontSize: 14,
        color: 'pink'
    },
    Image: {
        width: 100,
        height: 100
    }
})

const mapDispatchToProps = {
    dispatchHMovie: (HMovie) => HollywoodMovie(HMovie),
}

const mapStateToProps = (state) => ({
    HollywoodMovies: state.HollywoodReducer.HollywoodMovies
})

export default connect(mapStateToProps, mapDispatchToProps)(HollywoodMovies);