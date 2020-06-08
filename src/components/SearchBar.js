import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return(
        <View style={styles.backgroundStyle}>
            <Feather name = 'search' style={styles.searchIconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder='Search' 
                style={styles.input}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    );  
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        fontSize: 18
    },
    searchIconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;