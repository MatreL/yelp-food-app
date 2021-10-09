import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //Price === "$" || "$$" || "$$$"
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice("$")} 
                    title="Cost effective" 
                    />
                <ResultsList 
                    results={filterResultsByPrice("$$")} 
                    title="Bit pricer"
                    />
                <ResultsList 
                    results={filterResultsByPrice("$$$")} 
                    title="Big spender"
                    />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#fff",
    }
})

export default SearchScreen;
