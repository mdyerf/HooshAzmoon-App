import React from 'react';
import {View, StyleSheet } from 'react-native';

const Screen = ({children}) => (
    <View style={styles.container}>
        {children}
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: '100%',
        overflow: 'scroll',
    }
});

export default Screen;