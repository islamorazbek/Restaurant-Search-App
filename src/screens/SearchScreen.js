import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

import useResults from '../hooks/useResults';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    // console.log(results);
    
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    };

    return(
        <View style={styles.main}>
            <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
                <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
                <ResultsList results={filterResultsByPrice('$$$')} title='Bit Spender' />
            </ScrollView>
        </View>
    );  
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1
    },
    error:{
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold'
    }
});

export default SearchScreen;