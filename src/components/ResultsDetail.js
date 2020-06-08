import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultsDetail = ({imageSource, name, rating, review_count}) => {
    return(
        <View style = {styles.resultStyle} >
            <Image 
                style={styles.imageStyle}
                source={{uri: imageSource}}
            />
            <Text style={styles.nameStyle}>{name}</Text>
            <Text style = {styles.ratingStyle}>{rating} Stars, {review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    nameStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    resultStyle: {
        padding: 10,
        margin: 1,
        marginLeft: 10,
        backgroundColor: '#F0EEEE',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#F0EEEE'
    },
    imageStyle: {
        height: 120,
        width: 250,
        borderRadius: 5
    },
    ratingStyle: {
        color: 'grey'
    }
});

export default ResultsDetail;