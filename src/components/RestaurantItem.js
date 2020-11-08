import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions } from 'react-native';


const RestaurantItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: props.restaurant.image_url }}
            />
            <Text style={styles.name}>{props.restaurant.name}</Text>
        </TouchableOpacity>
    )
}

export { RestaurantItem };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fdb080',
        padding: 5,
        margin: 3,
        borderRadius: 10
    },
    image: {
        height: Dimensions.get('window').height / 3,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

