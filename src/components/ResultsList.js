import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import ResultItem from './ResultItem'
import { withNavigation } from 'react-navigation'

const ResultsList = ({title, results, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor= {(result) => result.id}
                renderItem= {({item}) => {
                    return (
                    <TouchableOpacity onPress={() => navigation.navigate("Result", {id: item.id})}>
                        <ResultItem result={item}/>
                    </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10
    }
})

export default withNavigation(ResultsList);
