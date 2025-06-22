import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import ThemedView from "@/presentation/shared/ThemedView";
import ThemedButton from "@/presentation/shared/ThemedButton";

const AlertsScreen = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);

    return (
        <ThemedView>
                <ThemedButton className="my-5 mx-2" onPress={AlertsScreen}>
                    2-Button Alert
                </ThemedButton>
                <ThemedButton className="my-5 mx-2" onPress={createThreeButtonAlert} >
                    3-Button Alert
                </ThemedButton>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
export default AlertsScreen;
