import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { BollywoodMovie } from '../actions'
import Carousel from '../components/carousel'

const initialState = {
    name: '',
    releaseYear: '',
    imgUrl: ''
}

class BollywoodMovies extends React.Component {
    state = initialState;

    BollywoodMovie = () => {
        this.props.dispatchBMovie(this.state);
    }

    render() {
        const { BollywoodMovies } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Bollywood Movies</Text>
                <Carousel />
                <ScrollView style={styles.BooksContainer}>
                    {
                        BollywoodMovies.map((BMovie, index) => (
                            <View style={styles.book} key={index}>
                                <Image style={styles.Image} source={{ uri: BMovie.imgUrl }} />
                                <View>
                                    <Text>{BMovie.name}</Text>
                                    <Text>{BMovie.releaseYear}</Text>
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
    dispatchBMovie: (BMovie) => BollywoodMovie(BMovie),
}

const mapStateToProps = (state) => ({
    BollywoodMovies: state.BollywoodReducer.BollywoodMovies
})

export default connect(mapStateToProps, mapDispatchToProps)(BollywoodMovies);