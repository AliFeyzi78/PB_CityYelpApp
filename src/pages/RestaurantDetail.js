import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const RestaurantDetail = (props) => {
    const { selectedRestaurant } = props.route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.name}>{selectedRestaurant.name}</Text>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://picsum.photos/200/300' }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.phone}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export { RestaurantDetail };

const styles = StyleSheet.create({
    container: { flex: 1, padding: 5 },
    name: { fontWeight: '300', fontSize: 25 },
    image: { height: Dimensions.get('window').height / 3 },
    infoContainer: { backgroundColor: '#551753', margin: 5, borderRadius: 10 },
    infoText: { color: 'white', fontWeight: 'bold' },
})