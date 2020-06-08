import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({title, results, navigation}) => {

    if(!results.length){
        return null;
    }

    return(
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem = {({ item }) => {
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Details', {id: item.id})}>
                            <ResultsDetail 
                            imageSource={item.image_url}
                            name={item.name}
                            review_count={item.review_count}
                            rating={item.rating}
                        />
                        </TouchableOpacity>
                    );
                } }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
        marginTop: 10,
        marginLeft: 15,
        borderColor: '#F0EEEE',
        borderTopWidth: 1
    },
    nameStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    resultStyle: {
        padding: 10,
        margin: 1,
        backgroundColor: '#F0EEEE',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#F0EEEE'
    },
    imageStyle: {
        height: 100,
        width: 150
    },
    ratingStyle: {
        color: 'grey'
    }
});

export default withNavigation(ResultsList);