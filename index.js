//Imports
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import ProductList from './src/components/ProductList';
//Component Creation using JSX babeljs.io
const App = () => (
    // <Text style={{ backgroundColor: 'white' }} > Some Text</Text >
    //Mendatory to style flex when using ScrollView inside the root view 
    <View style={{ flex: 1 }}>
        <Header headerText={'ProductList'} />
        <ProductList />
    </View>
);
//Making the componet available for screen / other parts of the app
AppRegistry.registerComponent('app_basic', () => App);

