import React from 'react';
import ThemedView from "@/presentation/shared/ThemedView";
import ThemedText from "@/presentation/shared/ThemedText";
import {StatusBar} from "expo-status-bar";
import {Platform} from "react-native";
import ThemedButton from "@/presentation/shared/ThemedButton";
import {router} from "expo-router";

const ModalScreen = () => {
    return (
        <ThemedView  className="justify-center items-center flex-1">
            <ThemedText>Hola, este es el Modal</ThemedText>

            <ThemedButton
                className="my-4"
            onPress={() => router.push("/modal/modal-window-2")}
            >
                Otro Modal
            </ThemedButton>

            <ThemedButton
                onPress={()=> router.dismiss()}
            >
                Cerrar Modal
            </ThemedButton>

            <StatusBar
                style={Platform.OS === 'ios' ? 'light' : 'auto'}
            />
        </ThemedView>
    );
};

export default ModalScreen;
