import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import yelp from '../api/yelp';

import { Entypo } from '@expo/vector-icons'; 

const ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');

    const [images, setImages] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const getById = async (id) => {
        try{
            const response = await yelp.get(`/${id}`);
            setImages(response.data);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    console.log(images);

    useEffect(() => {
        getById(id);
    }, []);

    if(!images){
        return null;
    }

    return(
        <View style={styles.main}>
            <Text style={styles.nameStyle}>{images.name}</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <FlatList 
                data={images.photos}
                keyExtractor={ (photo) => photo}
                renderItem = { ({item}) => {
                    return <Image style={styles.imagesStyle} source={{uri: item}}/>
                }}
            />
            <View flexDirection='row'>
                <Text style={styles.addressStyle1}>Adress: </Text>
                <Entypo name='location-pin' style={styles.icon}/>
                <Text style={styles.addressStyle2}>{images.location.address1}</Text>
            </View>
            <Text style={styles.phoneStyle}>Phone: {images.phone}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    imagesStyle: {
        width: 300,
        height: 200,
        marginVertical: 5,
        borderRadius: 5,
        alignSelf: 'center'
    },
    nameStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 5,
        borderBottomColor: '#F0EEEE',
        borderBottomWidth: 1

    },
    addressStyle1: {
        fontSize: 20,
        margin: 5,
        fontStyle: 'italic'
    },
    addressStyle2: {
        fontSize: 20,
        marginTop: 5,
        marginLeft: 10,
        fontStyle: 'italic'
    },
    phoneStyle: {
        fontSize: 20,
        margin : 5,
        fontStyle: 'italic'
    },
    icon: {
        position: 'absolute',
        fontSize: 24,
        marginTop: 5,
        marginLeft: 65,
        left: 5,
        color: 'red'
    }
});

export default ResultShowScreen;