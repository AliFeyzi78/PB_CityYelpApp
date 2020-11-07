import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import { CityItem, SearchBar } from '../components';

let originalList = []

const CityList = (props) => {
    //const [originalList, setOriginalList] = useState([]);
    const [cityList, setCityList] = useState([]);

    const fetchCityData = async () => {
        const { data } = await axios.get("https://opentable.herokuapp.com/api/cities")
        setCityList(data.cities);
        originalList = [...data.cities];
    }

    useEffect(() => {
        fetchCityData();
    }, [])

    const renderCities = ({ item }) => <CityItem cityName={item} /> //<Text>{item}</Text>

    const renderSeparator = () => <View style={{ borderWidth: 1, borderColor: '#05100a' }} />

    function searchCity(search) {
        const filteredCities = originalList.filter(city => {
            const text = search.toUpperCase();
            const cityName = city.toUpperCase();

            return cityName.indexOf(text) > -1;
        })

        setCityList(filteredCities)
    }

    return (
        <SafeAreaView>
            <View>
                <SearchBar
                    placeholder="...Search a City..."
                    onSearch={(value) => searchCity(value)}
                />
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={cityList}
                    renderItem={renderCities}
                    ItemSeparatorComponent={renderSeparator}
                />
            </View>
        </SafeAreaView>
    )
}

export { CityList };