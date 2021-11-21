import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import PlanetHeader from '../components/planet-header';


export default function Web({ route }) {
    const { url } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PlanetHeader backButton={true} />
            <WebView 
                source={{ uri: url }}
            />
            <StatusBar barStyle="dark-content" />
        </SafeAreaView>
        
    )
}
