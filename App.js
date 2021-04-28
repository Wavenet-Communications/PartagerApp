/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
} from 'react-native';
import MainScreen from './src/screens/MainScreen';



const App: () => Node = () => {


    return (
        <SafeAreaView >
            <MainScreen />
        </SafeAreaView>
    );
};

export default App;
