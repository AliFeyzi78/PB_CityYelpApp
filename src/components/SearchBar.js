import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={(value) => props.onSearch(value)}
            />
        </View>
    )
}

export { SearchBar };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8d8d8d',
        margin: 5,
        padding: 1,
        borderRadius: 15,
    }
})