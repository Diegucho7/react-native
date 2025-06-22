import { View, Text } from 'react-native';
import ThemedView from "@/presentation/shared/ThemedView";
import {Link, router} from "expo-router";
import ThemedButton from "@/presentation/shared/ThemedButton";

const ModalScreen = () => {
  return (
    <ThemedView >

        <Link asChild href="/modal/modal-window" className="mx-4">
            <Text className="text-light-text dark:text-dark-text my-2 text-xl">
                Abrir Modal
            </Text>
        </Link>
        <ThemedButton
            onPress={() => router.push("/modal/modal-window")
        }
            className="mx-4"
        >
            Abrir Modal
        </ThemedButton>


    </ThemedView>
  );
};
export default ModalScreen;
