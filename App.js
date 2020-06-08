// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Details: ResultShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
  }
});

export default createAppContainer(navigator);

// API data from Yelp fusion

// Client ID:
// gJzKvDfRnTHOtmBYpVFx7A

// API Key:
// t7NIAPWzygxYHQBlyBT7QA1XcwRVCJveQuYL2a5ppsReG_VURrnPAIpr5TwF9YNbgPjJRjY1puc1TSDC_uOwrO-vK4GFNLtK1b9GpsngrYhyOF8R9-Sf5TTrDgDBXnYx

