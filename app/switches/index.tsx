import {View, Text, Switch} from 'react-native';
import ThemedView from "@/presentation/shared/ThemedView";
import {useState} from "react";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";

const Switches = () => {

    const [state,setState] = useState({
        isActive:true,
        isHungry: false,
        isHappy:true,
    });


  return (
    <ThemedView margin className="mt-2">

        <ThemedCard>

        <ThemedSwitch
        text="Activo"
        onValueChange={(value) => setState({ ...state, isActive: value })}
        className="mb-4"
        value={state.isActive}
        />

        <ThemedSwitch
        text="Hambriento"
        value={state.isHungry}
        onValueChange={(value) => setState({ ...state, isHungry: value })}
        className="mb-4"
        />

        <ThemedSwitch
        text="Contento"
        value={state.isHappy}
        onValueChange={(value) => setState({ ...state, isHappy: value })}
        className="mb-4"
        />


        </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
